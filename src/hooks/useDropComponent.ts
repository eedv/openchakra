import { useDrop, DropTargetMonitor } from 'react-dnd'
import { rootComponents } from '../designSystems/increase/editor'
import useDispatch from './useDispatch'
import builder from '../core/models/composer/builder'

export const useDropComponent = (
  componentId: string,
  accept: (ComponentType | PresetType)[] = rootComponents,
  canDrop = true,
) => {
  const dispatch = useDispatch()
  const [{ isOver }, drop] = useDrop({
    accept,
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    drop: (item: ComponentItemProps, monitor: DropTargetMonitor) => {
      if (!monitor.isOver()) {
        return
      }
      if (item.isMoved) {
        dispatch.components.moveComponent({
          parentId: componentId,
          componentId: item.id,
        })
      } else if (item.presetType) {
        const metaComponent = builder(item.presetType, componentId)
        dispatch.components.addMetaComponent(metaComponent)
      } else {
        dispatch.components.addComponent({
          parentName: componentId,
          type: item.type,
          rootParentType: item.rootParentType,
          isContainer: item.isContainer,
        })
      }
    },
    canDrop: () => canDrop,
  })

  return { drop, isOver }
}

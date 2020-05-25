import Composer from './composer'
import { menuItems } from '../../../designSystems/increase/MenuItems'

type ComposedComponent = {
  components: IComponents
  root: string
  parent: string
}

export const builder = (
  type: ComponentType,
  parent: string,
): ComposedComponent => {
  const composer = new Composer()
  const children = menuItems[type]?.children

  const nodeId = composer.addNode({
    type,
    parent,
  })
  if (children) {
    Object.keys(children).forEach(childType => {
      composer.addNode({ type: childType as ComponentType, parent: nodeId })
    })
  }

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

type BuilderFn = (parent: string) => ComposedComponent

type ComposerBuilders = {
  [k: string]: BuilderFn
}

export default builder

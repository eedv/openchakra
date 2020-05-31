import Composer from './composer'
import {
  presetsList,
  MenuItemType,
} from '../../../designSystems/increase/MenuItems'

type ComposedComponent = {
  components: IComponents
  root: string
  parent: string
}

const presetBuilder = (
  composer: Composer,
  components: MenuItemType[],
  nodeId: string,
) => {
  for (let i = 0; i < components.length; i++) {
    const component = components[i]
    const currentNodeId = composer.addNode({
      type: component.type,
      parent: nodeId,
    })
    if (component.children) {
      presetBuilder(composer, component.children, currentNodeId)
    }
  }
}

export const builder = (
  presetType: PresetType,
  parent: string,
): ComposedComponent => {
  const composer = new Composer()
  const presetConfig = presetsList.find(preset => preset.type === presetType)

  const nodeId = composer.addNode({
    type: presetConfig?.mainComponentType || 'Div',
    parent,
  })

  if (presetConfig && presetConfig.children) {
    presetBuilder(composer, presetConfig.children, nodeId)
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

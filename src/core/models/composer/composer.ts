/* eslint-disable @typescript-eslint/no-explicit-any */
import { DEFAULT_PROPS } from '../../../designSystems/increase/defaultProps'
import { generateId } from '../../../utils/generateId'

type AddNode = {
  type: ComponentType
  parent?: string
  props?: any
}

class Composer {
  components: IComponents = {}

  rootComponentType: ComponentType | undefined = undefined

  constructor(name?: ComponentType) {
    if (name) {
      this.rootComponentType = name
    }
  }

  addNode = ({ type, parent = 'root', props = {} }: AddNode): string => {
    const id = generateId()

    if (parent === 'root' && !this.rootComponentType) {
      this.rootComponentType = type
    }

    this.components = {
      ...this.components,
      [id]: {
        children: [],
        type,
        parent,
        id,
        props: { ...DEFAULT_PROPS[type], ...props },
      },
    }

    if (parent !== 'root' && this.components[parent]) {
      this.components[parent].children.push(id)
    }

    return id
  }

  getComponents() {
    return this.components
  }
}

export default Composer

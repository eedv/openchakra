import { Div } from './Html'
import { IncreaseLibrary } from './increase/componentDefinitions'

export const getComponent = (type: ComponentType) => {
  if (type === 'Div') {
    return Div
  }
  return IncreaseLibrary[type]
}

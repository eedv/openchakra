import { basic } from './basic'

export type TemplateType = 'basic'

const templates: {
  [id in TemplateType]: IComponents
} = {
  basic,
}

export default templates

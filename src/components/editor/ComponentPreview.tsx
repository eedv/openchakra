import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import * as Increase from '@increase/typed-components'
import WithChildrenPreviewContainer from './WithChildrenPreviewContainer'
import { getComponentBy } from '../../core/selectors/components'
import PreviewContainer from './PreviewContainer'

const ComponentPreview: React.FC<{
  componentName: string
}> = ({ componentName, ...forwardedProps }) => {
  const component = useSelector(getComponentBy(componentName))
  if (!component) {
    console.error(`ComponentPreview unavailable for component ${componentName}`)
  }

  const type = (component && component.type) || null

  switch (type) {
    // Components with childrens
    case 'Grid':
      return (
        <WithChildrenPreviewContainer
          component={component}
          type={Increase[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
    default:
      return (
        <PreviewContainer
          component={component}
          type={Increase[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
  }
}

export default memo(ComponentPreview)

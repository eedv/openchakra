/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, forwardRef, useState } from 'react'
import styled from '@emotion/styled'
type displayType = 'block' | 'inline' | 'contents'

export const Wrapper = styled.div<{ displayType: displayType }>`
  display: ${({ displayType }) => displayType || 'contents'};
  &.container-component-style > * {
    padding: 1rem;
    outline: 2px dashed rgba(124, 138, 227, 0.4);
  }
  &.component-hovered > * {
    cursor: pointer;
    outline: 2px dashed rgba(124, 138, 227, 0.8);
  }
  &.component-is-over > * {
    background-color: rgba(124, 138, 227, 0.4);
  }
  &.component-selected > * {
    outline: 2px solid rgba(124, 138, 227);
  }
`
declare global {
  interface Window {
    chrome: any
  }
}
const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
// eslint-disable-next-line react/display-name
export const ComponentWrapper = forwardRef((props: any, ref: any) => {
  const [displayType, setDisplayType] = useState<displayType>('contents')

  useEffect(() => {
    if (isChrome && ref && ref.current && ref.current.firstChild) {
      const componentElement = ref.current.firstChild
      if (
        componentElement.nodeType === document.TEXT_NODE ||
        getComputedStyle(componentElement).display.indexOf('inline') !== -1
      ) {
        setDisplayType('inline')
      } else {
        setDisplayType('block')
      }
    }
  }, [ref])
  return <Wrapper {...props} displayType={displayType} ref={ref} />
})

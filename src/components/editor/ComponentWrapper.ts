import styled from '@emotion/styled'

export const ComponentWrapper = styled.div`
  display: contents;
  &.container-component-style > * {
    padding: 1rem;
    outline: 2px dashed rgba(124, 138, 227, 0.4);
  }
  &.component-hovered > * {
    outline: 2px dashed rgba(124, 138, 227, 0.8);
  }
  &.component-is-over > * {
    background-color: rgba(124, 138, 227, 0.4);
  }
  &.component-selected > * {
    outline: 2px solid rgba(124, 138, 227);
  }
`

import styled from '@emotion/styled'

export const ComponentWrapper = styled.div`
  display: contents;
  &.component-selected > * {
    box-shadow: violet 0px 0px 0px 2px inset;
  }
  &.component-hovered > * {
    box-shadow: blue 0px 0px 0px 2px inset;
  }
  &.component-is-over > * {
    background-color: rgba(200, 255, 150, 50);
  }
  &.container-component-style > * {
    padding: 1rem;
    box-shadow: blue 0px 0px 0px 2px inset;
  }
`

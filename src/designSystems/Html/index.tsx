import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
const GenericDiv = styled.div``

export const Div: React.FC<any> = ({ children, ...rest }) => {
  return (
    <GenericDiv {...rest} style={rest}>
      {children}
    </GenericDiv>
  )
}

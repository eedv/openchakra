import React, { memo } from 'react'
import TextControl from '../../controls/TextControl'

const BorderPanel = () => {
  return (
    <>
      <TextControl label="Border" name="border" />
      <TextControl label="Border radius" name="borderRadius" />
    </>
  )
}

export default memo(BorderPanel)

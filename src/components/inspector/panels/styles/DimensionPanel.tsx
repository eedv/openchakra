import React, { memo } from 'react'
import { SimpleGrid } from '@chakra-ui/core'
import TextControl from '../../controls/TextControl'
import SelectControl from '../../controls/SelectControl'

const DimensionPanel = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={1}>
        <TextControl hasColumn label="Width" name="width" />
        <TextControl hasColumn label="Height" name="height" />
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={1}>
        <TextControl hasColumn label="Min W" name="minWidth" />
        <TextControl hasColumn label="Min H" name="minHeight" />

        <TextControl hasColumn label="Max W" name="maxWidth" />
        <TextControl hasColumn label="Max H" name="maxHeight" />
      </SimpleGrid>

      <SelectControl
        label="Overflow"
        name="overflow"
        options={['visible', 'hidden', 'scroll']}
      />
    </>
  )
}

export default memo(DimensionPanel)

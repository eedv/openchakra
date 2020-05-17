import React, { memo } from 'react'
import { Input } from '@chakra-ui/core'
import FormControl from '../controls/FormControl'
import { useForm } from '../../../hooks/useForm'
import usePropsSelector from '../../../hooks/usePropsSelector'

const ClassNamePanel = () => {
  const { setValueFromEvent } = useForm()
  const className = usePropsSelector('className')

  return (
    <FormControl label="Class">
      <Input
        name="className"
        onChange={setValueFromEvent}
        size="sm"
        value={className || ''}
      />
    </FormControl>
  )
}

export default memo(ClassNamePanel)

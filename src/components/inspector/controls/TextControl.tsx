import React, { ReactNode } from 'react'
import { Input } from '@chakra-ui/core'
import FormControl from './FormControl'
import { useForm } from '../../../hooks/useForm'
import usePropsSelector from '../../../hooks/usePropsSelector'

type TextControlPropsType = {
  name: string
  label: string | ReactNode
  placeholder?: string
  hasColumn?: boolean
}

const TextControl: React.FC<TextControlPropsType> = ({
  name,
  label,
  placeholder = '',
  hasColumn,
}) => {
  const { setValueFromEvent } = useForm()
  const value = usePropsSelector(name)

  return (
    <FormControl hasColumn htmlFor={name} label={label}>
      <Input
        autoComplete="off"
        id={name}
        name={name}
        onChange={setValueFromEvent}
        placeholder={placeholder}
        rounded="md"
        size="sm"
        type="text"
        value={value || ''}
        width={hasColumn ? '3rem' : '100%'}
      />
    </FormControl>
  )
}

export default TextControl

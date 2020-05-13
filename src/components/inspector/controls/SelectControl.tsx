import React, { ReactNode } from 'react'
import { Select } from '@chakra-ui/core'
import FormControl from './FormControl'
import { useForm } from '../../../hooks/useForm'
import usePropSelector from '../../../hooks/usePropsSelector'

type SelectControlPropsType = {
  name: string
  label: string | ReactNode
  options: string[]
}

const SelectControl: React.FC<SelectControlPropsType> = ({
  name,
  label,
  options,
}) => {
  const { setValueFromEvent } = useForm()
  const state = usePropSelector(name)

  return (
    <FormControl htmlFor={name} label={label}>
      <Select
        id={name}
        name={name}
        onChange={setValueFromEvent}
        size="sm"
        value={state || ''}
      >
        {options &&
          options.map(option => <option key={option}>{option}</option>)}
      </Select>
    </FormControl>
  )
}

export default SelectControl

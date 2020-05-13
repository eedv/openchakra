import React, { ReactNode } from 'react'
import { Switch } from '@chakra-ui/core'
import FormControl from './FormControl'
import { useForm } from '../../../hooks/useForm'
import usePropsSelector from '../../../hooks/usePropsSelector'

type SwitchControlPropsType = {
  name: string
  label: string | ReactNode
}

const SwitchControl: React.FC<SwitchControlPropsType> = ({ name, label }) => {
  const { setValue } = useForm()
  const value = usePropsSelector(name)

  return (
    <FormControl htmlFor={name} label={label}>
      <Switch
        id={name}
        isChecked={value || false}
        name={name}
        onChange={() => setValue(name, !value)}
        size="sm"
      />
    </FormControl>
  )
}

export default SwitchControl

import React, { useRef, useEffect, KeyboardEvent } from 'react'
import { Input } from '@chakra-ui/core'
import FormControl from './FormControl'
import useDispatch from '../../../hooks/useDispatch'
import { useForm } from '../../../hooks/useForm'
import usePropsSelector from '../../../hooks/usePropsSelector'
import { useSelector } from 'react-redux'
import { getInputTextFocused } from '../../../core/selectors/app'

const ChildrenControl: React.FC<{ label?: string }> = ({ label = 'Text' }) => {
  const dispatch = useDispatch()
  const textInput = useRef<HTMLInputElement>(null)
  const focusInput = useSelector(getInputTextFocused)
  const { setValueFromEvent } = useForm()
  const children = usePropsSelector('children')
  const onKeyUp = (event: KeyboardEvent) => {
    if (event.keyCode === 13 && textInput.current) {
      textInput.current.blur()
    }
  }
  useEffect(() => {
    if (focusInput && textInput.current) {
      textInput.current.focus()
    } else if (focusInput === false && textInput.current) {
      textInput.current.blur()
    }
  }, [focusInput])

  return (
    <FormControl htmlFor="children" label={label}>
      <Input
        id="children"
        name="children"
        onBlur={() => {
          dispatch.app.toggleInputText(false)
        }}
        onChange={setValueFromEvent}
        onKeyUp={onKeyUp}
        ref={textInput}
        size="sm"
        type="text"
        value={children}
      />
    </FormControl>
  )
}

export default ChildrenControl

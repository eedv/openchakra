import React, { memo, useState, FormEvent, ChangeEvent, useRef } from 'react'
import { useInspectorState } from '../../../contexts/inspector-context'
import { getSelectedComponent } from '../../../core/selectors/components'
import { useSelector } from 'react-redux'
import { IoIosFlash } from 'react-icons/io'
import {
  IconButton,
  Flex,
  Box,
  SimpleGrid,
  InputGroup,
  InputRightElement,
  Input,
  ButtonGroup,
} from '@chakra-ui/core'
import useDispatch from '../../../hooks/useDispatch'
import { useForm } from '../../../hooks/useForm'

const SEPARATOR = '='

const CustomPropsPanel = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const activePropsRef = useInspectorState()
  const { props, id } = useSelector(getSelectedComponent)
  const { setValue } = useForm()

  const [quickProps, setQuickProps] = useState('')
  const [hasError, setError] = useState(false)

  const onDelete = (propsName: string) => {
    dispatch.components.deleteProps({
      id,
      name: propsName,
    })
  }

  const activeProps = activePropsRef || []
  const customProps = Object.keys(props).filter(
    propsName => !activeProps.includes(propsName),
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getPropValue = (propvalue: any) => {
    return typeof propvalue === 'object' ? JSON.stringify(propvalue) : propvalue
  }

  const parseIfJSON = (value: string) => {
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }

  return (
    <>
      <form
        onSubmit={(event: FormEvent) => {
          event.preventDefault()

          const [name, value] = quickProps.split(SEPARATOR)

          if (name && value) {
            setValue(name, parseIfJSON(value))
            setQuickProps('')
            setError(false)
          } else {
            setError(true)
          }
        }}
      >
        <InputGroup mb={3} size="sm">
          <InputRightElement>
            <Box as={IoIosFlash} color="gray.300" />
          </InputRightElement>
          <Input
            isInvalid={hasError}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setQuickProps(event.target.value)
            }
            placeholder={`props${SEPARATOR}value`}
            ref={inputRef}
            value={quickProps}
          />
        </InputGroup>
      </form>

      {customProps.map((propsName, i) => (
        <Flex
          alignItems="center"
          bg={i % 2 === 0 ? 'white' : 'gray.50'}
          fontSize="xs"
          justifyContent="space-between"
          key={propsName}
          px={2}
        >
          <SimpleGrid columns={2} spacing={1} width="100%">
            <Box fontWeight="bold">{propsName}</Box>
            <Box>{getPropValue(props[propsName])}</Box>
          </SimpleGrid>

          <ButtonGroup display="flex" isAttached size="xs">
            <IconButton
              aria-label="edit"
              icon="edit"
              onClick={() => {
                setQuickProps(`${propsName}=${getPropValue(props[propsName])}`)
                if (inputRef.current) {
                  inputRef.current.focus()
                }
              }}
              size="xs"
              variant="ghost"
            />
            <IconButton
              aria-label="delete"
              icon="small-close"
              onClick={() => onDelete(propsName)}
              size="xs"
              variant="ghost"
            />
          </ButtonGroup>
        </Flex>
      ))}
    </>
  )
}

export default memo(CustomPropsPanel)

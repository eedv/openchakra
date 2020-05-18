import React, { memo } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
} from '@chakra-ui/core'
import { useForm } from '../../../../hooks/useForm'
import usePropsSelector from '../../../../hooks/usePropsSelector'

type PaddingPanelPropsType = {
  type: 'margin' | 'padding'
}

const ATTRIBUTES = {
  margin: {
    all: 'margin',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom',
    top: 'mmarginTop',
  },
  padding: {
    all: 'padding',
    left: 'paddingLeft',
    right: 'paddingRight',
    bottom: 'paddingBottom',
    top: 'paddingTop',
  },
}

const PaddingPanel = ({ type }: PaddingPanelPropsType) => {
  const { setValueFromEvent } = useForm()

  const all = usePropsSelector(ATTRIBUTES[type].all)
  const left = usePropsSelector(ATTRIBUTES[type].left)
  const right = usePropsSelector(ATTRIBUTES[type].right)
  const bottom = usePropsSelector(ATTRIBUTES[type].bottom)
  const top = usePropsSelector(ATTRIBUTES[type].top)

  return (
    <Box mb={4}>
      <FormControl>
        <FormLabel fontSize="xs" htmlFor="width" textTransform="capitalize">
          {type}
        </FormLabel>

        <InputGroup size="sm">
          <Input
            mb={1}
            name={ATTRIBUTES[type].all}
            onChange={setValueFromEvent}
            placeholder="All"
            size="sm"
            type="text"
            value={all || ''}
          />
        </InputGroup>

        <SimpleGrid columns={2} spacing={1}>
          <InputGroup size="sm">
            <InputLeftElement
              children={
                <Icon color="gray.300" fontSize="md" name="arrow-back" />
              }
            />
            <Input
              autoComplete="off"
              name={ATTRIBUTES[type].left}
              onChange={setValueFromEvent}
              placeholder="left"
              size="sm"
              type="text"
              value={left || ''}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftElement
              children={
                <Icon color="gray.300" fontSize="md" name="arrow-forward" />
              }
            />
            <Input
              autoComplete="off"
              name={ATTRIBUTES[type].right}
              onChange={setValueFromEvent}
              placeholder="right"
              size="sm"
              type="text"
              value={right || ''}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftElement
              children={<Icon color="gray.300" fontSize="md" name="arrow-up" />}
            />
            <Input
              autoComplete="off"
              name={ATTRIBUTES[type].top}
              onChange={setValueFromEvent}
              placeholder="top"
              size="sm"
              type="text"
              value={top || ''}
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputLeftElement
              children={
                <Icon color="gray.300" fontSize="md" name="chevron-down" />
              }
            />
            <Input
              autoComplete="off"
              name={ATTRIBUTES[type].bottom}
              onChange={setValueFromEvent}
              placeholder="bottom"
              size="sm"
              type="text"
              value={bottom || ''}
            />
          </InputGroup>
        </SimpleGrid>
      </FormControl>
    </Box>
  )
}

export default memo(PaddingPanel)

import React from 'react'
import { useDrag } from 'react-dnd'
import { Text, PseudoBox, Icon, Box } from '@chakra-ui/core'

const DragItem: React.FC<ComponentItemProps> = ({
  type,
  soon,
  label,
  isMeta,
  isChild,
  rootParentType,
  isContainer,
  presetType,
}) => {
  const [, drag] = useDrag({
    item: { id: type, type, isMeta, rootParentType, isContainer, presetType },
  })

  let boxProps: any = {
    cursor: 'no-drop',
    color: 'whiteAlpha.600',
  }

  if (!soon) {
    boxProps = {
      ref: drag,
      color: 'whiteAlpha.800',
      cursor: 'move',
      _hover: {
        ml: -1,
        mr: 1,
        bg: 'teal.100',
        shadow: 'sm',
        color: 'teal.800',
      },
    }
  }

  if (isChild) {
    boxProps = { ...boxProps, ml: 4 }
  }

  return (
    <PseudoBox
      alignItems="center"
      boxSizing="border-box"
      display="flex"
      my={1}
      p={1}
      rounded="md"
      transition="margin 200ms"
      {...boxProps}
    >
      <Icon fontSize="xs" mr={2} name="drag-handle" />

      <Text fontSize="sm" letterSpacing="wide" textTransform="capitalize">
        {label}
      </Text>

      {isMeta && (
        <Box
          borderColor="teal.600"
          borderWidth="1px"
          color="teal.300"
          fontSize="xs"
          ml={2}
          px={1}
          rounded={4}
        >
          preset
        </Box>
      )}

      {soon && (
        <Box
          borderColor="whiteAlpha.300"
          borderWidth="1px"
          color="whiteAlpha.500"
          fontSize="xs"
          ml={2}
          px={1}
          rounded={4}
        >
          soon
        </Box>
      )}
    </PseudoBox>
  )
}

export default DragItem

/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { Icon, PseudoBox, Text, PseudoBoxProps, Flex } from '@chakra-ui/core'
import ActionButton from '../ActionButton'

interface Props extends Pick<IComponent, 'type'> {
  opacity?: number
  onSelect: PseudoBoxProps['onClick']
  onDuplicate?: PseudoBoxProps['onClick']
  onMouseOver: PseudoBoxProps['onMouseOver']
  onMouseOut: PseudoBoxProps['onMouseOut']
  draggable?: boolean
}

const ElementListItem = forwardRef(
  (
    {
      type,
      opacity = 1,
      onSelect,
      onDuplicate,
      onMouseOut,
      onMouseOver,
      draggable,
    }: Props,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <PseudoBox
        alignItems="center"
        boxSizing="border-box"
        cursor={draggable ? 'move' : undefined}
        display="flex"
        my={1}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        opacity={opacity}
        p={1}
        ref={ref}
        rounded="md"
        transition="margin 200ms"
      >
        <Flex align="center" justify="space-between" w="100%">
          <Flex align="center">
            {draggable && <Icon fontSize="xs" mr={2} name="arrow-up-down" />}
            <Text fontSize="sm" letterSpacing="wide" textTransform="capitalize">
              {type}
            </Text>
          </Flex>
          <Flex>
            <ActionButton
              icon="settings"
              label="Inspect"
              onClick={onSelect}
              variantColor="blackAlpha"
            />
            {onDuplicate && (
              <ActionButton
                icon="copy"
                label="Duplicate"
                onClick={onDuplicate}
                variantColor="blackAlpha"
              />
            )}
          </Flex>
        </Flex>
      </PseudoBox>
    )
  },
)

export default ElementListItem

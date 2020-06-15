import React, { useState, ChangeEvent, memo } from 'react'
import {
  Flex,
  Box,
  Input,
  InputGroup,
  Icon,
  InputRightElement,
  DarkMode,
  IconButton,
} from '@chakra-ui/core'
import DragItem from './DragItem'
import { menuItems, presetsList } from '../../designSystems/increase/MenuItems'

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <DarkMode>
      <Flex direction="column" width="15rem">
        <Box backgroundColor="#2e3748">
          <InputGroup size="md">
            <InputRightElement>
              {searchTerm ? (
                <IconButton
                  aria-label="clear"
                  color="gray.300"
                  icon="close"
                  onClick={() => setSearchTerm('')}
                  size="xs"
                >
                  x
                </IconButton>
              ) : (
                <Icon color="gray.300" name="search" />
              )}
            </InputRightElement>
            <Input
              color="gray.300"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search component…"
              value={searchTerm}
            />
          </InputGroup>
        </Box>
        <Box
          as="menu"
          backgroundColor="#2e3748"
          flex="1"
          m={0}
          overflowX="visible"
          overflowY="auto"
          p={5}
          shadow="xl"
        >
          {presetsList
            .filter(c =>
              c.type.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map(preset => {
              const { type } = preset
              return (
                <DragItem
                  id={type}
                  isMeta={true}
                  key={type}
                  label={type}
                  presetType={type}
                  type={preset.mainComponentType}
                >
                  {type}
                </DragItem>
              )
            })}
          {menuItems
            .filter(c =>
              c.type.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map(item => {
              const { children, soon, type } = item

              if (children) {
                const elements = children.map(child => (
                  <DragItem
                    id={child.type}
                    isChild
                    key={child.type}
                    label={child.type}
                    type={child.type}
                  >
                    {child.type}
                  </DragItem>
                ))

                return [
                  <DragItem
                    id={`${type}Meta`}
                    isMeta
                    key={`${type}Meta`}
                    label={type}
                    soon={soon}
                    type={type}
                  >
                    {type}
                  </DragItem>,
                  ...elements,
                ]
              }

              return (
                <DragItem
                  id={type}
                  key={type}
                  label={type}
                  soon={soon}
                  type={type}
                >
                  {type}
                </DragItem>
              )
            })}
        </Box>
      </Flex>
    </DarkMode>
  )
}

export default memo(Menu)

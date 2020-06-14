import React, { useState, ChangeEvent, memo } from 'react'
import {
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
      <Box
        as="menu"
        backgroundColor="#2e3748"
        flex="0 0 14rem"
        m={0}
        maxH="calc(100vh - 3rem)"
        overflowX="visible"
        overflowY="auto"
        p={5}
        shadow="xl"
        width="15rem"
      >
        <InputGroup mb={4} size="sm">
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
          )}
          <Input
            color="gray.300"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Search component…"
            value={searchTerm}
          />
        </InputGroup>

        {presetsList
          .filter(c => c.type.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(preset => {
            const { type } = preset
            return (
              <DragItem
                id={type}
                isContainer={true}
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
          .filter(c => c.type.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(item => {
            const { children, soon, isContainer, type } = item

            if (children) {
              const elements = children.map(child => (
                <DragItem
                  id={child.type}
                  isChild
                  isContainer={child.isContainer || false}
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
                  isContainer={isContainer || false}
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
                isContainer={isContainer || false}
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
    </DarkMode>
  )
}

export default memo(Menu)

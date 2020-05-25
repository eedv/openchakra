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
import {
  MenuItemType as MenuItem,
  menuItems,
} from '../../designSystems/increase/MenuItems'

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

        {(Object.keys(menuItems) as ComponentType[])
          .filter(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(name => {
            const { children, soon } = menuItems[name] as MenuItem

            if (children) {
              const elements = Object.keys(children).map(childName => (
                <DragItem
                  id={childName as any}
                  isChild
                  key={childName}
                  label={childName}
                  rootParentType={menuItems[name]?.rootParentType || name}
                  type={childName as any}
                >
                  {childName}
                </DragItem>
              ))

              return [
                <DragItem
                  id={`${name}Meta` as any}
                  isMeta
                  key={`${name}Meta`}
                  label={name}
                  rootParentType={menuItems[name]?.rootParentType || name}
                  soon={soon}
                  type={`${name}` as any}
                >
                  {name}
                </DragItem>,
                ...elements,
              ]
            }

            return (
              <DragItem
                id={name as any}
                key={name}
                label={name}
                rootParentType={menuItems[name]?.rootParentType || name}
                soon={soon}
                type={name as any}
              >
                {name}
              </DragItem>
            )
          })}
      </Box>
    </DarkMode>
  )
}

export default memo(Menu)

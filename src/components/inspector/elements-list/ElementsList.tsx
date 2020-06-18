import React from 'react'
import { Box } from '@chakra-ui/core'
import ElementListItem from './ElementListItemDraggable'

interface Props {
  elements: IComponent[]
  moveItem: (fromIndex: number, toIndex: number) => void
  onSelect: (id: IComponent['id']) => void
  onDuplicate: (id: IComponent['id']) => void
  onHover: (id: IComponent['id']) => void
  onUnhover: () => void
}

const ElementsList: React.FC<Props> = ({
  elements,
  moveItem,
  onSelect,
  onDuplicate,
  onHover,
  onUnhover,
}) => {
  return (
    <Box h="100%">
      {elements.map(
        (element, index) =>
          element && (
            <ElementListItem
              id={element.id}
              index={index}
              key={element.id}
              moveItem={moveItem}
              onDuplicate={onDuplicate}
              onHover={onHover}
              onSelect={onSelect}
              onUnhover={onUnhover}
              type={element.type}
            />
          ),
      )}
    </Box>
  )
}

export default ElementsList

import React, { useState, memo, useEffect } from 'react'
import { Box, Stack } from '@chakra-ui/core'
import Panels from './panels/Panels'
import { GoCode } from 'react-icons/go'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdRefresh } from 'react-icons/io'
import { useSelector } from 'react-redux'
import useDispatch from '../../hooks/useDispatch'
import StylesPanel from './panels/StylesPanel'
import {
  getSelectedComponent,
  getComponents,
  getSelectedComponentId,
} from '../../core/selectors/components'
import ActionButton from './ActionButton'
import { generateComponentCode } from '../../utils/code'
import useClipboard from '../../hooks/useClipboard'
import { useInspectorUpdate } from '../../contexts/inspector-context'

// eslint-disable-next-line react/display-name
const CodeActionButton = memo(() => {
  const [isLoading, setIsLoading] = useState(false)
  const { onCopy, hasCopied } = useClipboard()

  const selectedId = useSelector(getSelectedComponentId)
  const components = useSelector(getComponents)

  const parentId = components[selectedId].parent
  const parent = { ...components[parentId] }
  // Do not copy sibling components from parent
  parent.children = [selectedId]

  return (
    <ActionButton
      icon={hasCopied ? 'check' : GoCode}
      isLoading={isLoading}
      label="Copy code component"
      onClick={async () => {
        setIsLoading(true)
        const code = await generateComponentCode(parent, components)
        onCopy(code)
        setIsLoading(false)
      }}
      variantColor={hasCopied ? 'green' : 'gray'}
    />
  )
})

const Inspector = () => {
  const dispatch = useDispatch()
  const component = useSelector(getSelectedComponent)

  const { clearActiveProps } = useInspectorUpdate()
  const { type, id, children } = component

  const isRoot = id === 'root'
  const parentIsRoot = component.parent === 'root'

  const componentHasChildren = children.length > 0

  useEffect(() => {
    clearActiveProps()
  }, [clearActiveProps])

  return (
    <>
      <Box bg="white">
        <Box
          alignItems="center"
          bg="yellow.100"
          color="yellow.900"
          display="flex"
          fontSize="md"
          fontWeight="semibold"
          justifyContent="space-between"
          px={2}
          py={2}
          shadow="sm"
        >
          {isRoot ? 'Document' : type}
        </Box>
        {!isRoot && (
          <Stack
            align="center"
            flexWrap="wrap"
            isInline
            justify="flex-end"
            px={2}
            py={2}
            spacing={4}
            zIndex={99}
          >
            <CodeActionButton />
            <ActionButton
              icon="copy"
              label="Duplicate"
              onClick={() => dispatch.components.duplicate()}
            />
            <ActionButton
              icon={IoMdRefresh}
              label="Reset props"
              onClick={() => dispatch.components.resetProps(component.id)}
            />
            <ActionButton
              bg="red.500"
              icon={FiTrash2}
              label="Remove"
              onClick={() => dispatch.components.deleteComponent(component.id)}
            />
          </Stack>
        )}
      </Box>

      <Box bg="white" pb={1} px={3}>
        <Panels component={component} isRoot={isRoot} />
      </Box>

      <StylesPanel
        componentType={type}
        isRoot={isRoot}
        parentIsRoot={parentIsRoot}
        showChildren={componentHasChildren}
      />
    </>
  )
}

export default Inspector

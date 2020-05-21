import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Editor from './components/editor/Editor'
import Inspector from './components/inspector/Inspector'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/Header'
import { Global } from '@emotion/core'
import { HotKeys } from 'react-hotkeys'
import useShortcuts, { keyMap } from './hooks/useShortcuts'
import EditorErrorBoundary from './components/errorBoundaries/EditorErrorBoundary'
import { InspectorProvider } from './contexts/inspector-context'

const App = () => {
  const { handlers } = useShortcuts()

  return (
    <HotKeys allowChanges handlers={handlers} keyMap={keyMap}>
      <Global
        styles={() => ({
          html: { minWidth: '860px', backgroundColor: '#1a202c' },
        })}
      />

      <Header />
      <DndProvider backend={Backend}>
        <Flex h="calc(100vh - 3rem)">
          <Sidebar />
          <EditorErrorBoundary>
            <Box bg="white" flex={1} position="relative" zIndex={10}>
              <Editor />
            </Box>
          </EditorErrorBoundary>

          <Box
            bg="#f7fafc"
            borderLeft="1px solid #cad5de"
            flex="0 0 20rem"
            maxH="calc(100vh - 3rem)"
            overflowX="visible"
            overflowY="auto"
          >
            <InspectorProvider>
              <Inspector />
            </InspectorProvider>
          </Box>
        </Flex>
      </DndProvider>
    </HotKeys>
  )
}

export default App

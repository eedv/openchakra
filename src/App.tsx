import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Editor from './components/editor/Editor'
import Inspector from './components/inspector/Inspector'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/Header'
import { Global, css } from '@emotion/core'
import { HotKeys } from 'react-hotkeys'
import useShortcuts, { keyMap } from './hooks/useShortcuts'
import EditorErrorBoundary from './components/errorBoundaries/EditorErrorBoundary'
import { InspectorProvider } from './contexts/inspector-context'

const App = () => {
  const { handlers } = useShortcuts()

  return (
    <HotKeys allowChanges handlers={handlers} keyMap={keyMap}>
      <Global
        styles={css`
          html {
            min-width: 860px;
            background-color: #1a202c;
          }
          position: relative;
          .show-layout {
            padding: 1rem;
            outline: 1px dashed grey;
          }
          .is-drop-target {
            background-color: rgba(124, 138, 227, 0.4);
          }
          .is-hovered {
            cursor: pointer;
            outline: 2px dashed rgba(124, 138, 227, 0.8);
          }
          .is-hovered::after,
          .is-selected::after,
          .is-drop-target::after::after {
            position: absolute;
            display: none;
            background-color: white;
            border: 1px solid rgba(124, 138, 227, 0.8);
            border-radius: 3px;
            padding: 0 6px;
            transform: translate(-3px, -120%);
            font-weight: bold;
            content: 'Component';
            top: 0;
            left: 0;
            font-size: 0.85rem;
          }
          .is-hovered::after,
          .is-selected::after,
          .is-drop-target::after {
            display: block;
          }

          .is-selected {
            outline: 2px solid rgba(124, 138, 227);
          }
        `}
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

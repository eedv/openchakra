import React, { memo } from 'react'
import { Box, Text, Link } from '@chakra-ui/core'
import ComponentPreview from './ComponentPreview'
import { useDropComponent } from '../../hooks/useDropComponent'
import SplitPane from 'react-split-pane'
import CodePanel from '../CodePanel'
import { useSelector } from 'react-redux'
import useDispatch from '../../hooks/useDispatch'
import { getComponents } from '../../core/selectors/components'
import { getShowLayout, getShowCode } from '../../core/selectors/app'
import { ThemeProvider } from '@increase/typed-components'
import '@increase/typed-components/dist/index.css'

export const gridStyles = {
  backgroundImage:
    'linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);',
  backgroundSize: '20px 20px',
  bg: '#edf2f6',
  p: 10,
}

const Editor: React.FC = () => {
  const showCode = useSelector(getShowCode)
  const showLayout = useSelector(getShowLayout)
  const components = useSelector(getComponents)
  const dispatch = useDispatch()

  const { drop } = useDropComponent('root')
  const isEmpty = !components.root.children.length
  const rootProps = components.root.props

  let editorBackgroundProps = {}

  const onSelectBackground = () => {
    dispatch.components.unselect()
  }

  if (showLayout) {
    editorBackgroundProps = gridStyles
  }

  editorBackgroundProps = {
    ...editorBackgroundProps,
    ...rootProps,
  }

  const Playground = (
    <Box
      p={2}
      {...editorBackgroundProps}
      alignItems="center"
      display={isEmpty ? 'flex' : 'block'}
      flexDirection="column"
      height="100%"
      justifyContent="center"
      minWidth="10rem"
      onClick={onSelectBackground}
      overflow="auto"
      position="relative"
      ref={drop}
      width="100%"
    >
      {isEmpty && (
        <Text color="gray.400" fontSize="xl" maxWidth="md" textAlign="center">
          Drag some component to start coding without code! Or load{' '}
          <Link
            color="gray.500"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              dispatch.components.loadDemo('basic')
            }}
            textDecoration="underline"
          >
            a basic component
          </Link>
          .
        </Text>
      )}
      <ThemeProvider>
        {components.root.children.map((name: string) => (
          <ComponentPreview componentName={name} key={name} />
        ))}
      </ThemeProvider>
    </Box>
  )

  if (!showCode) {
    return Playground
  }

  return (
    <SplitPane
      defaultSize="50%"
      resizerStyle={{
        border: '3px solid rgba(1, 22, 39, 0.21)',
        zIndex: 20,
        cursor: 'row-resize',
      }}
      split="horizontal"
      style={{ overflow: 'auto' }}
    >
      {Playground}
      <CodePanel />
    </SplitPane>
  )
}

export default memo(Editor)

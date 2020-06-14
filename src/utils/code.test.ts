import { generateComponentCode, generateCode } from './code'

const componentFixtures: IComponents = {
  root: {
    id: 'root',
    parent: 'root',
    type: 'Box',
    children: ['comp-1'],
    props: {},
  },
  'comp-1': {
    id: 'comp-1',
    props: {
      bg: 'whatsapp.500',
    },
    children: ['comp-2'],
    type: 'Div',
    parent: 'root',
  },
  'comp-2': {
    id: 'comp-2',
    props: {
      children: 'Lorem Ipsum',
    },
    children: [],
    type: 'Paragraph',
    parent: 'comp-1',
  },
}

describe('Code utils', () => {
  it('should generate component code', async () => {
    const code = await generateComponentCode(
      componentFixtures['root'],
      componentFixtures,
    )

    expect(code).toEqual(`const MyBox = () => (
  <Div bg="whatsapp.500">
    <Paragraph>Lorem Ipsum</Paragraph>
  </Div>
)
`)
  })

  it('should generate whole tree code', async () => {
    const code = await generateCode(componentFixtures)

    expect(code).toEqual(`import React from 'react'
import { ThemeProvider, CSSReset, theme, Box, Text } from '@chakra-ui/core'

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box bg="whatsapp.500">
      <Text>Lorem Ipsum</Text>
    </Box>
  </ThemeProvider>
)

export default App
`)
  })
})

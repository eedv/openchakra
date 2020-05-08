import React, { memo, useState, useEffect } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { Box, Button, useClipboard } from '@chakra-ui/core'
import { generateCode } from '../utils/code'
import theme from 'prism-react-renderer/themes/nightOwl'
import { useSelector } from 'react-redux'
import { getComponents } from '../core/selectors/components'

const CodePanel = () => {
  const components = useSelector(getComponents)
  const [code, setCode] = useState<string | undefined>(undefined)

  useEffect(() => {
    const getCode = async () => {
      const code = await generateCode(components)
      setCode(code)
    }

    getCode()
  }, [components])

  const { onCopy, hasCopied } = useClipboard(code)

  return (
    <Box
      backgroundColor="#011627"
      bottom={0}
      fontSize="sm"
      left={0}
      overflow="auto"
      p={4}
      position="absolute"
      right={0}
      top={0}
      zIndex={40}
    >
      <Button
        fontSize="xs"
        height="24px"
        onClick={onCopy}
        position="absolute"
        right="1.25em"
        size="sm"
        textTransform="uppercase"
        top={4}
        variantColor="teal"
      >
        {hasCopied ? 'copied' : 'copy'}
      </Button>
      <Highlight
        {...defaultProps}
        code={code || '// Formatting code… please wait ✨'}
        language="jsx"
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={`${line}-${i}`} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    key={`${token}-${i}`}
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  )
}

export default memo(CodePanel)

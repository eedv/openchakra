import React, { memo } from 'react'
import { IconButton, ButtonGroup, useTheme } from '@chakra-ui/core'
import ColorsControl from '../../controls/ColorsControl'
import { GoBold, GoItalic } from 'react-icons/go'
import {
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatAlignCenter,
  MdFormatAlignJustify,
} from 'react-icons/md'
import FormControl from '../../controls/FormControl'
import { ComboboxOption } from '@reach/combobox'
import InputSuggestion from '../../inputs/InputSuggestion'
import { useForm } from '../../../../hooks/useForm'
import usePropsSelector from '../../../../hooks/usePropsSelector'

import '@reach/combobox/styles.css'

const TextPanel = () => {
  const { setValue, setValueFromEvent } = useForm()
  const theme = useTheme()

  const fontWeight = usePropsSelector('fontWeight')
  const fontStyle = usePropsSelector('fontStyle')
  const textAlign = usePropsSelector('textAlign')
  const fontSize = usePropsSelector('fontSize')
  const letterSpacing = usePropsSelector('letterSpacing')
  const lineHeight = usePropsSelector('lineHeight')

  return (
    <>
      <FormControl label="Style">
        <IconButton
          aria-label="bold"
          icon={GoBold}
          mr={1}
          onClick={() => {
            setValue('fontWeight', fontWeight ? null : 'bold')
          }}
          size="xs"
          variant={fontWeight ? 'solid' : 'outline'}
          variantColor={fontWeight ? 'whatsapp' : 'gray'}
        >
          Bold
        </IconButton>
        <IconButton
          aria-label="italic"
          icon={GoItalic}
          onClick={() => {
            setValue('fontStyle', fontStyle === 'italic' ? null : 'italic')
          }}
          size="xs"
          variant={fontStyle === 'italic' ? 'solid' : 'outline'}
          variantColor={fontStyle === 'italic' ? 'whatsapp' : 'gray'}
        >
          Italic
        </IconButton>
      </FormControl>

      <FormControl label="Text align">
        <ButtonGroup isAttached size="xs">
          <IconButton
            aria-label="bold"
            icon={MdFormatAlignLeft}
            onClick={() => {
              setValue('textAlign', 'left')
            }}
            variant={textAlign === 'left' ? 'solid' : 'outline'}
            variantColor={textAlign === 'left' ? 'whatsapp' : 'gray'}
          />

          <IconButton
            aria-label="italic"
            icon={MdFormatAlignCenter}
            onClick={() => {
              setValue('textAlign', 'center')
            }}
            variant={textAlign === 'center' ? 'solid' : 'outline'}
            variantColor={textAlign === 'center' ? 'whatsapp' : 'gray'}
          />

          <IconButton
            aria-label="italic"
            icon={MdFormatAlignRight}
            onClick={() => {
              setValue('textAlign', 'right')
            }}
            variant={textAlign === 'right' ? 'solid' : 'outline'}
            variantColor={textAlign === 'right' ? 'whatsapp' : 'gray'}
          />

          <IconButton
            aria-label="italic"
            icon={MdFormatAlignJustify}
            onClick={() => {
              setValue('textAlign', 'justify')
            }}
            variant={textAlign === 'justify' ? 'solid' : 'outline'}
            variantColor={textAlign === 'justify' ? 'whatsapp' : 'gray'}
          />
        </ButtonGroup>
      </FormControl>

      <FormControl htmlFor="fontSize" label="Font size">
        <InputSuggestion
          handleChange={setValueFromEvent}
          name="fontSize"
          value={fontSize}
        >
          {Object.keys(theme.fontSizes).map(option => (
            <ComboboxOption key={option} value={option} />
          ))}
        </InputSuggestion>
      </FormControl>

      <ColorsControl label="Color" name="color" withFullColor />

      <FormControl htmlFor="lineHeight" label="Line height">
        <InputSuggestion
          handleChange={setValueFromEvent}
          name="lineHeight"
          value={lineHeight}
        >
          {Object.keys(theme.lineHeights).map(option => (
            <ComboboxOption key={option} value={option} />
          ))}
        </InputSuggestion>
      </FormControl>

      <FormControl htmlFor="letterSpacing" label="Letter spacing">
        <InputSuggestion
          handleChange={setValueFromEvent}
          name="letterSpacing"
          value={letterSpacing}
        >
          {Object.keys(theme.letterSpacings).map(option => (
            <ComboboxOption key={option} value={option} />
          ))}
        </InputSuggestion>
      </FormControl>
    </>
  )
}

export default memo(TextPanel)

import React, { ReactNode, useState, memo } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Grid,
  PseudoBox,
  PopoverBody,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
} from '@chakra-ui/core'
import FormControl from './FormControl'
import { useForm } from '../../../hooks/useForm'
import ColorPicker from 'coloreact'
import 'react-color-picker/index.css'
import usePropsSelector from '../../../hooks/usePropsSelector'
import { ThemeProvider } from '@increase/typed-components'
import { withTheme } from 'styled-components'

type ColorControlPropsType = {
  name: string
  label: string | ReactNode
  enableHues?: boolean
  withFullColor?: boolean
  theme?: any
}

const ColorsControl = (props: ColorControlPropsType) => {
  const { setValue, setValueFromEvent } = useForm()
  const [hue, setHue] = useState(500)
  const value = usePropsSelector(props.name)
  const {
    theme: { colorsNew },
  } = props

  let propsIconButton: any = { bg: value }
  if (value && colorsNew[value]) {
    propsIconButton = { variantColor: value }
  }
  debugger
  const huesPicker = (
    <>
      <Grid gap={0} mb={2} templateColumns="repeat(10, 1fr)">
        {Object.entries(colorsNew).map(([key, value]) => {
          if (key === 'product') return null
          return Object.entries(
            value as object,
          ).map(([colorKey, colorValue]) => (
            <PseudoBox
              _hover={{ shadow: 'lg' }}
              bg={colorValue}
              border={colorKey.includes('white') ? '1px solid lightgrey' : ''}
              cursor="pointer"
              height="30px"
              key={colorKey}
              mt={2}
              onClick={() => setValue(props.name, colorValue)}
              rounded="full"
              width="30px"
            />
          ))
        })}
      </Grid>

      {props.enableHues && (
        <Slider
          max={900}
          min={0}
          onChange={value => {
            value = value === 0 ? 50 : value
            setHue(value)
          }}
          step={100}
          value={hue}
        >
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb size={8}>
            <Box fontSize="xs" rounded="full">
              {hue}
            </Box>
          </SliderThumb>
        </Slider>
      )}
    </>
  )

  return (
    <FormControl label={props.label}>
      <Popover placement="bottom-end" usePortal>
        <PopoverTrigger>
          <IconButton
            aria-label="Color"
            border={value ? 'none' : '2px solid grey'}
            isRound
            mr={2}
            shadow="md"
            size="xs"
            {...propsIconButton}
          >
            {props.label}
          </IconButton>
        </PopoverTrigger>
        <PopoverContent zIndex={99999}>
          <PopoverArrow />
          <PopoverBody>
            {props.withFullColor ? (
              <Tabs size="sm" variant="soft-rounded" variantColor="green">
                <TabList>
                  <Tab>Theme</Tab>
                  <Tab>All</Tab>
                </TabList>
                <TabPanels mt={4}>
                  <TabPanel>{huesPicker}</TabPanel>

                  <TabPanel>
                    <Box height="150px" position="relative">
                      <ColorPicker
                        color={value}
                        onChange={(color: any) => {
                          setValue(props.name, `#${color.hex}`)
                        }}
                      />
                      );
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            ) : (
              huesPicker
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Input
        name={props.name}
        onChange={setValueFromEvent}
        size="sm"
        value={value}
        width="100px"
      />
    </FormControl>
  )
}

const ThemedControl = withTheme(ColorsControl)

const ThemedColorsControl = (props: ColorControlPropsType) => {
  return (
    <ThemeProvider>
      <ThemedControl {...props} />
    </ThemeProvider>
  )
}

export default memo(ThemedColorsControl)

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
  useTheme,
} from '@chakra-ui/core'
import FormControl from './FormControl'
import { useForm } from '../../../hooks/useForm'
import omit from 'lodash/omit'
import ColorPicker from 'coloreact'
import 'react-color-picker/index.css'
import usePropsSelector from '../../../hooks/usePropsSelector'

type ColorControlPropsType = {
  name: string
  label: string | ReactNode
  enableHues?: boolean
  withFullColor?: boolean
}

const ColorsControl = (props: ColorControlPropsType) => {
  const { setValue, setValueFromEvent } = useForm()
  const [hue, setHue] = useState(500)
  const value = usePropsSelector(props.name)
  const theme = useTheme()

  const themeColors: any = omit(theme.colors, [
    'transparent',
    'current',
    'black',
    'white',
  ])

  let propsIconButton: any = { bg: value }
  if (value && themeColors[value]) {
    propsIconButton = { variantColor: value }
  }

  const huesPicker = (
    <>
      <Grid gap={0} mb={2} templateColumns="repeat(5, 1fr)">
        {Object.keys(themeColors).map(colorName => (
          <PseudoBox
            _hover={{ shadow: 'lg' }}
            bg={`${colorName}.${props.enableHues ? hue : 500}`}
            border={colorName.includes('white') ? '1px solid lightgrey' : ''}
            cursor="pointer"
            height="30px"
            key={colorName}
            mt={2}
            onClick={() =>
              setValue(
                props.name,
                props.enableHues ? `${colorName}.${hue}` : colorName,
              )
            }
            rounded="full"
            width="30px"
          />
        ))}
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
      <Popover placement="bottom">
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
        <PopoverContent width="200px" zIndex={theme.zIndices.modal}>
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

export default memo(ColorsControl)

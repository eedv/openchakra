import React, { ReactNode, memo } from 'react'
import {
  FormLabel,
  FormControl as ChakraFormControl,
  Grid,
  Box,
} from '@chakra-ui/core'

type FormControlPropType = {
  label: ReactNode
  children: ReactNode
  htmlFor?: string
  hasColumn?: boolean
}

const FormControl: React.FC<FormControlPropType> = ({
  label,
  htmlFor,
  children,
  hasColumn,
}) => (
  <ChakraFormControl
    alignItems="center"
    as={Grid}
    display="flex"
    justifyItems="center"
    mb={3}
  >
    <FormLabel
      color="gray.500"
      fontSize="xs"
      htmlFor={htmlFor}
      lineHeight="1rem"
      mr={2}
      p={0}
      width={hasColumn ? '2.5rem' : '90px'}
    >
      {label}
    </FormLabel>
    <Box
      alignItems="center"
      display="flex"
      justifyItems="center"
      width={hasColumn ? '30px' : '100%'}
    >
      {children}
    </Box>
  </ChakraFormControl>
)

export default memo(FormControl)

import React from 'react'
import {
  TooltipProps,
  IconButtonProps,
  Tooltip,
  IconButton,
} from '@chakra-ui/core'

interface Props
  extends Omit<TooltipProps, 'label' | 'aria-label' | 'children'> {
  icon: IconButtonProps['icon']
  as?: IconButtonProps['as']
  label: string
  isLoading?: boolean
  onClick?: IconButtonProps['onClick']
  variantColor?: IconButtonProps['variantColor']
}

const ActionButton: React.FC<Props> = ({
  icon,
  as,
  label,
  onClick,
  variantColor,
  isLoading,
  ...props
}) => {
  return (
    <Tooltip aria-label={label} hasArrow label={label} zIndex={11} {...props}>
      <IconButton
        aria-label={label}
        as={as}
        icon={icon}
        isLoading={isLoading}
        onClick={onClick}
        size="sm"
        variant="ghost"
        variantColor={variantColor}
      />
    </Tooltip>
  )
}

export default ActionButton

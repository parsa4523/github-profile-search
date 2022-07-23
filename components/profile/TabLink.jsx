import React from 'react'
import { chakra } from '@chakra-ui/react'

export const TabLink = (props) => (
  <chakra.a
    {...props}
    fontWeight="semibold"
    px="4"
    py="3"
    color={'gray.600'}
    borderBottom="2px solid transparent"
    transition="all 0.2s"
    _hover={{
      borderColor: 'gray.400',
    }}
    _activeLink={{
      color: 'blue.600',
      borderColor: 'currentColor',
    }}
  />
)

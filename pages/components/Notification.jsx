import { Box, Center, Flex, Icon } from '@chakra-ui/react'
import * as React from 'react'
import { FiInfo } from 'react-icons/fi'

export const Notification = (props) => {
  const { children, ...flexProps } = props
  return (
    <Flex
      direction={{
        base: 'column',
        sm: 'row',
      }}
      width="md"
      boxShadow="lg"
      bg={'white'}
      borderRadius={{
        base: 'none',
        sm: 'base',
      }}
      overflow="hidden"
      borderTopWidth={{
        base: '4px',
        sm: '0',
      }}
      borderColor={'red.500'}
      {...flexProps}
    >
      <Center
        display={{
          base: 'none',
          sm: 'flex',
        }}
        bg={'red.500'}
        px="6"
      >
        <Icon as={FiInfo} boxSize="6" color={'white'} />
      </Center>
      <Box px="2" py="3">
        {children}
      </Box>
    </Flex>
  )
}

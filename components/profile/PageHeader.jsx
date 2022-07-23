import React from 'react';

import { Avatar, Box, Button, Container, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

import { TabLink } from './TabLink';

export const PageHeader = ({ info }) => {
	return (
		<Box bg={'white'} borderBottom={'1px solid #efefef'} marginBottom={{ base: 8, md: 0 }}>
			<Box width={'100%'} height={200} backgroundSize={'cover'} backgroundImage={'url(/gradient.jpg)'} mb={'-60px'} />
			<Container maxW="7xl">
				<Flex gap={4} align={{ base: 'end', sm: 'end' }} direction={{ base: 'row', sm: 'row' }} mb={5}>
					<Avatar border={'4px solid #fff'} shadow={'md'} size="2xl" src={info.avatar_url} name={info.name || info.login} />
					<Flex flex={1} justify={'flex-end'}>
						<Button>Follow</Button>
					</Flex>
				</Flex>

				<Heading size="lg" mb="3">
					{info.name || info.login}
				</Heading>

				<HStack spacing={8} mb={6}>
					<HStack color={'gray.700'} fontWeight={'medium'}>
						<Text color={'blue.500'} fontWeight={'bold'}>
							{info.followers}
						</Text>
						<Text>Follower</Text>
					</HStack>
					<HStack color={'gray.700'} fontWeight={'medium'}>
						<Text color={'blue.500'} fontWeight={'bold'}>
							{info.following}
						</Text>
						<Text>following</Text>
					</HStack>
				</HStack>

				<Stack direction="row" spacing="4">
					<TabLink aria-current="page" href="#">
						Overview
					</TabLink>
				</Stack>
			</Container>
		</Box>
	);
};

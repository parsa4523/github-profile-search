import React, { useState, useReducer, useContext } from 'react';

import API from '../constants/API';
import { getApiService } from '../services/HttpService';
import { UrlMapParams } from '../helpers/urlHelper';

import { useRouter } from 'next/router';

import { Box, Button, Heading, chakra, Stack, Text, Flex, InputGroup, InputLeftElement, Input, FormControl } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { useUserSearch } from '../hooks/useUserSearch';

export default function Home() {
	const [query, setQuery] = useState('');
	const { handleUserSearch } = useUserSearch();

	return (
		<Box h={'full'}>
			<Flex justify={'center'} align={'center'} h={'100vh'} position={'relative'} zIndex={2}>
				<Box as="section" color="gray.600" py="7.5rem">
					<Box
						textAlign={'center'}
						maxW={{
							base: 'xl',
							md: '5xl',
						}}
						mx="auto"
						px={{
							base: '6',
							md: '8',
						}}
					>
						<Heading as="h1" size="3xl" fontWeight="extrabold" maxW="48rem" mx="auto" lineHeight="1.2" letterSpacing="tight">
							Github Profiles
						</Heading>
						<Stack spacing={4} mt="8">
							<chakra.form
								onSubmit={e => {
									e.preventDefault();
									handleUserSearch(query);
								}}
								display={'flex'}
								flexDirection={{
									base: 'column',
									md: 'row',
								}}
								gap={2}
							>
								<FormControl id="username">
									<InputGroup>
										<Input
											value={query}
											onChange={e => setQuery(e.target.value)}
											variant={'filled'}
											type="text"
											placeholder="user name"
											size={'lg'}
											required
										/>
										<InputLeftElement pointerEvents="none" h={'100%'} paddingLeft={4}>
											<BiSearch size={28} />
										</InputLeftElement>
									</InputGroup>
								</FormControl>

								<Button type="submit" size="lg" colorScheme="blue" px="8" fontWeight="bold" fontSize="md">
									Search
								</Button>
							</chakra.form>
						</Stack>
						<Box
							maxW={'lg'}
							borderRadius={8}
							height={150}
							bg={'gray.100'}
							mt={8}
							p={4}
							display={'flex'}
							alignItems={'center'}
							backgroundSize={'cover'}
							backgroundImage={'linear-gradient(45deg, #00000080, #00000050), url(/git.jpg)'}
							transition={'0.3s'}
							_hover={{
								transform: 'scale(1.1)'
							}}
						>
							<Text color={'white'} fontWeight={800} fontSize="xl" maxW="xl">
								Search for any profile in the github platform
							</Text>
						</Box>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
}

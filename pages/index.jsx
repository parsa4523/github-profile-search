import React, { useState, useReducer, useContext } from 'react';

import API from '../constants/API';
import { getApiService } from '../services/HttpService';
import { UrlMapParams } from '../helpers/urlHelper';

import { useRouter } from 'next/router';

import {
	Box,
	Button,
	Circle,
	Heading,
	chakra,
	Img,
	SimpleGrid,
	Stack,
	Text,
	Flex,
	VisuallyHidden,
	InputGroup,
	InputLeftElement,
	Input,
	Center,
	FormLabel,
	FormControl,
	AlertIcon,
	Alert,
	HStack,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { Notification } from './components/Notification';
import StateContext from './components/StateContext';
import DispatchContext from './components/DispatchContext';

export default function Home() {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const dispatch = useContext(DispatchContext);

	const handleUserSearch = async () => {
		try {
			const user = await getApiService(UrlMapParams(API.USER_GET, query));
			router.push(`/profile/${query}`);
			console.log(user);
		} catch (error) {
			if (error.response.status === 404) {
				dispatch({
					type: 'alert',
					title: 'User Not Found!',
					desc: 'Make sure the spelling is correct!',
				});
			} else {
				console.log('something went wrong!');
			}
		}
	};

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
									console.log('e', e);
									handleUserSearch();
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
						<Text fontSize="md" mt="4" maxW="xl" mx="auto">
							Search for any profile in the github platform
						</Text>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
}

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import API from '../../../constants/API';
import { getApiService } from '../../../services/HttpService';
import { UrlMapParams } from '../../../helpers/urlHelper';
import DispatchContext from '../../components/DispatchContext';

import { Box, Container, Image, FormControl, HStack, Input, InputGroup, InputLeftElement, chakra } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

const NavMenu = () => {
	const router = useRouter();
	const [query, setQuery] = useState();
	const dispatch = useContext(DispatchContext);

	const handleUserSearch = async () => {
		try {
			const user = await getApiService(UrlMapParams(API.USER_GET, query));
			router.push(`/profile/${query}`);
		} catch (error) {
			if (error?.response?.status === 404) {
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
		<Container maxW="7xl">
			<HStack
				spacing="4"
				flex="1"
				display={{
					base: 'flex',
					lg: 'flex',
				}}
			>
				<Link href={'/'}>
					<a>
						<Box height={'36px'} width={'36px'}>
							<Image src="/logo.png" alt="Logo" opacity={0.3}/>
						</Box>
					</a>
				</Link>
				<chakra.form
					onSubmit={e => {
						e.preventDefault();
						handleUserSearch();
					}}
				>
					<FormControl id="username">
						<InputGroup>
							<Input
								value={query}
								background={'blue.500'}
								_placeholder={{ color: 'white' }}
								border={'none'}
								onChange={e => setQuery(e.target.value)}
								type="text"
								placeholder="User"
								size={'md'}
								required
							/>
							<InputLeftElement pointerEvents="none" h={'100%'} paddingLeft={1} paddingTop={0.5}>
								<BiSearch size={20} />
							</InputLeftElement>
						</InputGroup>
					</FormControl>
				</chakra.form>
			</HStack>
		</Container>
	);
};

export default NavMenu;

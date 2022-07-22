import { Box, ChakraProvider, Heading, Stack, Text } from '@chakra-ui/react';
import { useReducer } from 'react';
import '../styles/globals.css';
import DispatchContext from './components/DispatchContext';
import { Notification } from './components/Notification';
import StateContext from './components/StateContext';

function MyApp({ Component, pageProps }) {
	const initialAlertState = [];

	function AlertReducer(state, action) {
		switch (action.type) {
			case 'alert':
				const newList = [...state];
				newList.push({ title: action.title, desc: action.desc });
				return newList;
		}
	}

	const [state, dispatch] = useReducer(AlertReducer, initialAlertState);

	return (
		<ChakraProvider>
			<StateContext.Provider value={state}>
				<DispatchContext.Provider value={dispatch}>
        <Box position={'absolute'} width={'100%'}>
						<Stack spacing={3} className={'floating-alerts'} justify={'center'}>
							{state.map((msg, index) => {
								return (
									<Box className={'floating-alert'} key={index}>
										<Notification key={index}>
											<Stack spacing="1" py={3}>
												<Heading as="h3" fontSize="md">
													{msg.title}
												</Heading>
												<Text>{msg.desc}</Text>
											</Stack>
										</Notification>
									</Box>
								);
							})}
						</Stack>
					</Box>
					<Component {...pageProps} />
				</DispatchContext.Provider>
			</StateContext.Provider>
		</ChakraProvider>
	);
}

export default MyApp;

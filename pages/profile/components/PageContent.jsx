import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Stack,
	Text,
	Wrap,
} from '@chakra-ui/react';

import { BiBuildings, BiLocationPlus, BiLinkAlt } from 'react-icons/bi';

import ListItem from './RepoItem';

export const PageContent = ({ info, repos, pagination }) => {
	const router = useRouter();

	return (
		<Box as="main" flex="1">
			<Container maxW="7xl">
				<Grid templateColumns="repeat(12, 1fr)" gap={{ base: 8, md: 0 }}>
					<GridItem colSpan={{ base: 12, sm: 3 }} borderRight={{ base: 'none', md: '1px solid #efefef' }}>
						<Box bg={'white'} p={{ base: 0, sm: 6 }}>
							<Stack spacing={3}>
								<Heading size={'md'}>About</Heading>
								<Text>{info.bio}</Text>

								{info.company && (
									<HStack>
										<BiBuildings />
										<Text fontSize="small" fontWeight="medium" color={'gray.600'}>
											{info.company}
										</Text>
									</HStack>
								)}

								{info.location && (
									<HStack spacing="1">
										<BiLocationPlus />
										<Text fontSize="small" fontWeight="medium" color={'gray.600'}>
											{info.location}
										</Text>
									</HStack>
								)}

								{info.blog && (
									<HStack spacing="1">
										<BiLinkAlt />
										<Text fontSize="small" fontWeight="medium" color={'gray.600'}>
											{info.blog}
										</Text>
									</HStack>
								)}
							</Stack>
						</Box>
					</GridItem>

					<GridItem colSpan={{ base: 12, sm: 9 }}>
						<Box bg={'white'} p={{ base: 0, sm: 6 }}>
							<Heading size={'md'} mb={6}>
								Projects
							</Heading>
							<SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={6}>
								{repos.map(repo => (
									<ListItem name={repo.name} description={repo.description} starsCount={repo.stargazers_count} key={repo.id} />
								))}
							</SimpleGrid>

							<Stack direction={'row'} spacing={2} justify={'right'}>
								{pagination?.prev && (
									<Link href={`/profile/${router.query.username}?page=${pagination.prev.page}`} scroll={false}>
										<Button>Prevoius</Button>
									</Link>
								)}
								{pagination?.next && (
									<Link href={`/profile/${router.query.username}?page=${pagination.next.page}`} scroll={false}>
										<Button>Next</Button>
									</Link>
								)}
							</Stack>
						</Box>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};

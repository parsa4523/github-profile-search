import React from 'react';

import { Stack, Flex, Circle, Text, Heading, Tag, Icon, Link, color } from '@chakra-ui/react';
import { BiStar, BiBook } from 'react-icons/bi';

const RepoItem = ({ name, description, starsCount, url }) => {
	return (
		<Stack
			as="li"
			direction="row"
			spacing="4"
			border={'1px solid #eaeaea'}
			transition={'0.1s'}
			borderRadius={8}
			padding={4}
			_hover={{ shadow: 'md' }}
		>
			<Stack spacing="4" pt="1" flex="1">
				<Flex direction="column" flex={1}>
					<Heading fontSize="md" fontWeight="semibold" mb={1}>
						<Icon as={BiBook} verticalAlign={'middle'} />{' '}
						<Link _hover={{color: 'blue.600'}} href={url}>
							{name}
						</Link>{' '}
						<Tag size={'sm'}>Public</Tag>
					</Heading>
					<Text fontSize="sm" color={'gray.600'}>
						{description}
					</Text>
				</Flex>
				<Flex>
					<Flex fontSize={'smaller'} align={'center'} gap={1}>
						<BiStar />
						{starsCount} Stars
					</Flex>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default RepoItem;

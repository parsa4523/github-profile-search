import { Flex } from '@chakra-ui/react';
import * as React from 'react';

import { getMultipleApiServices } from '../../services/HttpService';
import { UrlMapParams } from '../../helpers/UrlHelper';
import parse from 'parse-link-header';

import NavMenu from '../../components/profile/NavMenu';
import { PageContent } from '../../components/profile/PageContent';
import { PageHeader } from '../../components/profile/PageHeader';
import API from '../../constants/API';

const Profile = ({ userInfo, userRepos }) => {
	return (
		<Flex direction="column" height="100vh">
			<Flex align="center" bg="blue.600" color="white" px="6" minH="16">
				<Flex justify="space-between" align="center" w="full">
					<NavMenu />
				</Flex>
			</Flex>
			<PageHeader info={userInfo} />
			<PageContent info={userInfo} repos={userRepos.data} pagination={userRepos.pagination} url={userRepos.html_url}/>
		</Flex>
	);
};

export async function getServerSideProps(context) {
	let { username, page } = context.query;
	let user;

	try {
		user = await getMultipleApiServices([
			{ endpoint: UrlMapParams(API.USER_GET, username) },
			{ endpoint: UrlMapParams(API.USER_REPOS, username), data: { sort: 'updated' ,per_page: 6, page } },
			{ endpoint: UrlMapParams(API.USER_FOLLOWERS, username) },
		]);
	} catch(error) {
		// redirect to 404 page if user can't be found
		return {
			notFound: true,
		  }
	}

	const pagination = parse(user[1].headers.link);

	return {
		props: {
			userInfo: user[0].data,
			userRepos: { data: user[1].data, pagination },
			userFollowers: user[2].data,
		},
	};
}

export default Profile;

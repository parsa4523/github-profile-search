import { useContext } from 'react';
import { useRouter } from 'next/router';

import API from '../constants/API';
import { getApiService } from '../services/HttpService';
import { UrlMapParams } from '../helpers/UrlHelper';
import DispatchContext from '../components/DispatchContext';

export const useUserSearch = () => {
	const router = useRouter();
	const dispatch = useContext(DispatchContext);

	const handleUserSearch = async query => {
		try {
			const user = await getApiService(UrlMapParams(API.USER_GET, query));
			router.push(`/profile/${query}`);
			console.log(user);
		} catch (error) {
			if (error?.response?.status === 404) {
				dispatch({
					type: 'alert',
					title: 'User Not Found!',
					desc: 'Make sure the spelling is correct!',
				});
			} else {
				dispatch({
					type: 'alert',
					title: 'Somthing Went Wrong!',
				});
			}
		}
	};

	return { handleUserSearch };
};

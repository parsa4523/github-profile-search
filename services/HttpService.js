import axios from "axios";

export const getApiService = (url, data) => {
    const config = {
        url: url,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    if (data) {
        config.params = data;
    }

    return new axios(config);
}

export const getMultipleApiServices = (urls) => {
    const getRequests = urls.map((url) => axios.get(url.endpoint, {params: url.data}));
    
    return new axios.all(getRequests);
}
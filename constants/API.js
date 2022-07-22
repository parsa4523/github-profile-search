let PROTOCOL = 'https';
let BASE_URL = '://api.github.com';
let MAIN_URL = PROTOCOL + BASE_URL;

const API = {
    BASE_URL: BASE_URL,
    MAIN_URL: MAIN_URL,

    USER_GET : MAIN_URL + '/users/{username}',
    USER_REPOS: MAIN_URL + '/users/{username}/repos',
    USER_FOLLOWERS: MAIN_URL + '/users/{username}/followers',
    USER_FOLLOWINGS: MAIN_URL + '/users/{username}/following',
}

export default API;
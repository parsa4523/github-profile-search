export const UrlMapParams = (url, params) => {
    if (!Array.isArray(url))
        params = [params];

    params.forEach((item, key) => {
        let param = url.slice(url.indexOf('{'), url.indexOf('}') + 1);
        url = url.replace(param, params[key]);
    })

    return url;
}
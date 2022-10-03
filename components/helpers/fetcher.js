export const fetcher = (url, token, method = "get", data) => {
    return fetch(url, {
        method: method,
        ...(token ? {
            headers: {
                "Authorization": token,
            }
        } : null),
        ...(data ? {
            body: data,
        } : null)
    }).then(res => res.json()).then(data => data);
}
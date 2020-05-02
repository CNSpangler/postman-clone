export const makeRequest = (url, method, body) => {
  return fetch(url)
    .method(body)
    .then(res => res.json());
};

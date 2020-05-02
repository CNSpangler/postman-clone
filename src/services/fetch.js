export const makeRequest = (url, method, body) => {
  return fetch(url, {
    method: method,
    body: (method === 'GET' || method === 'DELETE') ? null : body,
  })
    .then(res => res.json());
};

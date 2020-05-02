export const makeRequest = (url, method, body) => {
  return fetch(url, {
    method: method,
    body: (method === 'GET' || method === 'DELETE') ? null : JSON.stringify(body),

    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => res.json());
};

export const makeRequest = (url, method, body) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify({
      body
    }),
    // body: body,
    // body: JSON.stringify()
  })
    .then(res => res.json());
};

// export const makeRequest = (url, method, body) => {
//   return fetch(url)
//     .method(body)
//     .then(res => res.json());
// };

export const baseApiUrl = { // eslint-disable-line
  development: 'http://localhost:3000',
  production: 'https://meta-image-search-api.herokuapp.com',
} [process.env.REACT_APP_ENV];
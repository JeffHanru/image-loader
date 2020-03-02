import Axios from 'axios'

export const apiUrlForFetchImage = {
  development: 'http://localhost:3000/api/imagesearch',
  production: 'https://infinite-woodland-82557.herokuapp.com/api/imagesearch',
}

export const getImages = filterSetting => {
  const {
    searchText: tags
  } = filterSetting
  const URL = apiUrlForFetchImage[process.env.NODE_ENV]
  return Axios({
    method: 'get',
    url: URL,
    params: {
      format: 'json',
      nojsoncallback: '1',
      tagmode: 'any',
      tags: tags
        .trim()
        .split(' ')
        .join(','),
    },
  }).then(response => {
    return response.data
  })
}
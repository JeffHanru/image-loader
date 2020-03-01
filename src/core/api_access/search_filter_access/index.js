import Axios from 'axios'

export const apiUrlForFetchImage = {
  development: 'http://localhost:3000/services/feeds/photos_public.gne',
  production: 'https://meta-image-search-api.herokuapp.com/feeds',
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
    return process.env.NODE_ENV === 'development' ? response : response.data
  })
}
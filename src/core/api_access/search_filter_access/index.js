import Axios from 'axios'
import {
  baseApiUrl
} from '../../../config';

export const getImages = filterSetting => {
  const {
    searchText: tags
  } = filterSetting
  console.log(process.env.NODE_ENV)
  console.log(baseApiUrl)
  console.log(baseApiUrl[process.env.NODE_ENV])
  const baseURL = baseApiUrl[process.env.NODE_ENV]
  return Axios({
    method: 'get',
    // baseURL: baseApiUrl,
    url: `${baseURL}/services/feeds/photos_public.gne`,
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
    return response
  })
}
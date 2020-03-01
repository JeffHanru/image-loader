import Axios from 'axios'
import {
  apiUrlForFetchImage
} from '../../../config';

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
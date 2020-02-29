import Axios from 'axios'

export const getImages = filterSetting => {
  const { searchText: tags } = filterSetting
  return Axios({
    method: 'get',
    url: '/services/feeds/photos_public.gne',
    params: {
      format: 'json',
      nojsoncallback: '1',
      tagmode: 'any',
      tags,
    },
  }).then(response => {
    return response
  })
}

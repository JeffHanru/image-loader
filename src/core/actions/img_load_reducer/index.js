import { ACTION_TYPES } from '../../utils'
import { getImages } from '../../api_access'

export const fetchImages = filterSetting => dispatch => {
  return getImages(filterSetting)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.FETCH_IMAGES,
        imageFetchingResult: response.data,
      })
    })
    .catch(error => {
      console.log(error)
    })
}

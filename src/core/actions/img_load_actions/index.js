import {
  ACTION_TYPES
} from '../../utils'
import {
  getImages
} from '../../api_access'
import {
  togglePrimarySpinner
} from '../spinner_actions'
import {
  receiveError,
  clearError
} from '../error_actions'


export const fetchImages = filterSetting => {
  return async dispatch => {
    dispatch(togglePrimarySpinner())
    try {
      const response = await getImages(filterSetting)
      dispatch({
        type: ACTION_TYPES.FETCH_IMAGES,
        imageFetchingResult: response.data,
      })
      dispatch(togglePrimarySpinner())
      dispatch(clearError())
    } catch (error) {
      dispatch(togglePrimarySpinner())
      dispatch(receiveError('Bad request'))
    }
  }
}
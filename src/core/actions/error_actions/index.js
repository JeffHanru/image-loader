import { ACTION_TYPES } from '../../utils'

export const receiveError = errorMessage => dispatch => {
  dispatch({
    type: ACTION_TYPES.RECEIVE_ERROR,
    errorMessage,
  })
}

export const clearError = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.CLEAR_ERROR,
  })
}

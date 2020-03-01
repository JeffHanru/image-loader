import { ACTION_TYPES } from '../../utils'

export const togglePrimarySpinner = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.TOGGLE_PRIMARY_SPINNER,
  })
}

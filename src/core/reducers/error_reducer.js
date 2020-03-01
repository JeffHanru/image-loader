import { ACTION_TYPES } from '../utils'

export const initialState = {
  error: '',
}

export default (state = initialState, action) => {
  const { type, errorMessage } = action
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (type) {
    case ACTION_TYPES.RECEIVE_ERROR:
      return Object.assign({}, newState, { error: errorMessage })
    case ACTION_TYPES.CLEAR_ERROR:
      return Object.assign({}, newState, { error: '' })
    default:
      return state
  }
}

import { ACTION_TYPES } from '../utils'

const initialState = {}

export default (state = initialState, action) => {
  const { type, imageFetchingResult } = action
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (type) {
    case ACTION_TYPES.FETCH_IMAGES:
      return Object.assign({}, newState, { ...imageFetchingResult })
    default:
      return state
  }
}

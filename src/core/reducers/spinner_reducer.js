import { ACTION_TYPES } from '../utils'

const initialState = {
  primarySpinner: false,
}

export default (state = initialState, action) => {
  const { type } = action
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (type) {
    case ACTION_TYPES.TOGGLE_PRIMARY_SPINNER:
      return Object.assign({}, newState, {
        primarySpinner: !state.primarySpinner,
      })
    default:
      return state
  }
}

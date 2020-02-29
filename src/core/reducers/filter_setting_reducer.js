import { ACTION_TYPES } from '../utils'

const initialState = {
  searchText: '',
}

export default (state = initialState, action) => {
  const { type, filterSetting } = action
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (type) {
    case ACTION_TYPES.UPDATE_FILTER_SETTING:
      return Object.assign({}, newState, { ...filterSetting })
    default:
      return state
  }
}

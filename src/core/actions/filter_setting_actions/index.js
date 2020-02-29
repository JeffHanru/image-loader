import { ACTION_TYPES } from '../../utils'

export const updateFilterSetting = filterSetting => dispatch => {
  dispatch({
    // todo: all type should be named as variable
    type: ACTION_TYPES.UPDATE_FILTER_SETTING,
    filterSetting,
  })
}

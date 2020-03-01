import { ACTION_TYPES } from '../../utils'

export const updateFilterSetting = filterSetting => dispatch => {
  dispatch({
    type: ACTION_TYPES.UPDATE_FILTER_SETTING,
    filterSetting,
  })
}

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import filterSettingReducer from './filter_setting_reducer'
import imgOverviewReducer from './img_overview_reducer'
import spinnerReducer from './spinner_reducer'
import errorReducer from './error_reducer'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    filterSettingReducer,
    imgOverviewReducer,
    spinnerReducer,
    errorReducer,
  })

export default createRootReducer

import React from 'react'
import { connect } from 'react-redux'
import 'typeface-roboto'
import { Grid } from '@material-ui/core'
import { SearchFilter, ImageContainer } from '../index'
import { AppContainer } from '../../styled_components'
import './App.css'
import { updateFilterSetting } from '../../actions/filter_setting_actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
    }
  }

  render() {
    return (
      <Grid container justify="center">
        <AppContainer data-name="app-container">
          <SearchFilter />
          <ImageContainer />
        </AppContainer>
      </Grid>
    )
  }
}

const mapStateToProps = ({ imgOverviewReducer }) => ({
  imgOverviewReducer,
})

const mapDispatchToProps = dispatch => ({
  updateFilterSetting: () => dispatch(updateFilterSetting()),
})
// todo remove redux here?
export default connect(mapStateToProps, mapDispatchToProps)(App)

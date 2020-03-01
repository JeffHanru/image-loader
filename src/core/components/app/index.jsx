import React from 'react'
import { connect } from 'react-redux'
import 'typeface-roboto'
import { Grid } from '@material-ui/core'
import { SearchFilter, ImageContainer, LoadingSpinner } from '../index'
import { AppContainer } from '../../styled_components'
import { ErrorContainer } from '../../components'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
    }
  }

  render() {
    const {
      spinnerReducer: { primarySpinner = false },
      errorReducer: { error = '' },
    } = this.props
    return (
      <Grid container justify="center">
        <AppContainer data-name="app-container">
          <SearchFilter />
          {error && <ErrorContainer error={error} />}
          {primarySpinner ? <LoadingSpinner /> : <ImageContainer />}
        </AppContainer>
      </Grid>
    )
  }
}

const mapStateToProps = ({
  imgOverviewReducer,
  spinnerReducer,
  errorReducer,
}) => ({
  imgOverviewReducer,
  spinnerReducer,
  errorReducer,
})

export default connect(mapStateToProps, null)(App)

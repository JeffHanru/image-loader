import React from 'react'
import { connect } from 'react-redux'
import { Button, TextField, CircularProgress } from '@material-ui/core'
import { updateFilterSetting, fetchImages } from '../../actions'

class SearchFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      error: '',
    }
  }

  componentDidMount() {
    const { filterSettingReducer: filterSetting, fetchImages } = this.props
    fetchImages(filterSetting)
  }

  componentDidUpdate = prevProps => {
    const { filterSettingReducer: prevFilterSetting } = prevProps
    const {
      filterSettingReducer: currentFilterSetting,
      fetchImages,
    } = this.props
    if (prevFilterSetting.searchText !== currentFilterSetting.searchText) {
      fetchImages(currentFilterSetting)
    }
  }

  onSearchBoxChanged = event => {
    const { filterSettingReducer, updateFilterSetting } = this.props
    const updatedFilterSetting = {
      ...filterSettingReducer,
      searchText: event.target.value,
    }
    updateFilterSetting(updatedFilterSetting)
  }

  render() {
    return (
      <div>
        <Button variant="contained">hello world</Button>
        <TextField onChange={this.onSearchBoxChanged} label="Please search" />
      </div>
    )
  }
}

const mapStateToProps = ({ filterSettingReducer }) => ({
  filterSettingReducer,
})

const mapDispatchToProps = dispatch => ({
  updateFilterSetting: filterSetting =>
    dispatch(updateFilterSetting(filterSetting)),
  fetchImages: filterSetting => dispatch(fetchImages(filterSetting)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)

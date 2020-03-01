import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button, TextField } from '@material-ui/core'
import { updateFilterSetting, fetchImages } from '../../actions'
import { STANDARD_TIMEOUT } from '../../utils'
import { initialState as initialFilterState } from '../../reducers/filter_setting_reducer'

const SearchFilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-around;
`

const textFieldStyle = {
  width: '60%',
}

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
      clearTimeout(this.delayRequest)
      this.delayRequest = setTimeout(
        () => fetchImages(currentFilterSetting),
        STANDARD_TIMEOUT
      )
    }
  }

  onSearchBoxChanged = filed => {
    return event => {
      const { filterSettingReducer, updateFilterSetting } = this.props
      const updatedFilterSetting = {
        ...filterSettingReducer,
        [filed]: event.target.value,
      }
      updateFilterSetting(updatedFilterSetting)
    }
  }

  onResetClicked = () => {
    const { updateFilterSetting, filterSettingReducer } = this.props
    if (!filterSettingReducer.searchText) {
      return
    }
    updateFilterSetting({ ...initialFilterState })
  }

  render() {
    const { filterSettingReducer: filterSetting } = this.props
    const { searchText = '' } = filterSetting
    return (
      <SearchFilterContainer>
        <TextField
          value={searchText}
          onChange={this.onSearchBoxChanged('searchText')}
          label="Please search by tags"
          style={textFieldStyle}
          helperText="use space to seperate tags"
        />
        <Button onClick={this.onResetClicked} variant="contained">
          Reset
        </Button>
      </SearchFilterContainer>
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

import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import { CardContainer } from '../index'
import { updateFilterSetting } from '../../actions/filter_setting_actions'
import { NoItemBox } from '../index'

class ImageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
    }
  }

  updateFilterSettingByTag = tag => {
    const { filterSettingReducer, updateFilterSetting } = this.props
    const updatedFilterSetting = {
      ...filterSettingReducer,
      searchText: tag,
    }
    updateFilterSetting(updatedFilterSetting)
  }

  render() {
    const { imgOverviewReducer = {} } = this.props
    const { items = [] } = imgOverviewReducer
    const showCard = items.length > 0
    return (
      <Grid container spacing={3}>
        {!showCard && <NoItemBox />}
        {showCard &&
          items.map(item => {
            return (
              <Grid xs={12} md={4} lg={4} key={item.link} item={true}>
                <CardContainer
                  item={item}
                  updateFilterSettingByTag={this.updateFilterSettingByTag}
                />
              </Grid>
            )
          })}
      </Grid>
    )
  }
}

const mapStateToProps = ({ imgOverviewReducer }) => ({
  imgOverviewReducer,
})

const mapDispatchToProps = dispatch => ({
  updateFilterSetting: filterSetting =>
    dispatch(updateFilterSetting(filterSetting)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)

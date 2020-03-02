import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { CenterContentContainer } from '../../utils/styled_components/conter_content_container'

const LoaddingSpinner = () => {
  return (
    <CenterContentContainer>
      <CircularProgress />
    </CenterContentContainer>
  )
}

export default LoaddingSpinner

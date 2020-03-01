import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { CenterContentContainer } from '../layout_component'

const LoaddingSpinner = () => {
  return (
    <CenterContentContainer>
      <CircularProgress />
    </CenterContentContainer>
  )
}

export default LoaddingSpinner

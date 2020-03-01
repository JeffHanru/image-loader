import React from 'react'
import { CenterContentContainer } from '../layout_component'
import { Alert, AlertTitle } from '@material-ui/lab'

const alertStyle = {
  width: '100%',
}

const ErrorContainer = ({ error }) => {
  return (
    <CenterContentContainer>
      <Alert style={alertStyle} severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    </CenterContentContainer>
  )
}

export default ErrorContainer

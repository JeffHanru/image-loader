import React from 'react'
import {
  CenterContentContainer
} from '../../utils/styled_components/conter_content_container'
import {
  Alert,
  AlertTitle
} from '@material-ui/lab'

const alertStyle = {
  width: '100%',
}

const ErrorContainer = ({
    error
  }) => ( < CenterContentContainer >
    <
    Alert style = {
      alertStyle
    }
    severity = "error" >
    <
    AlertTitle > Error < /AlertTitle> {
    error
  } < /Alert>  <
  /CenterContentContainer >)

export default ErrorContainer
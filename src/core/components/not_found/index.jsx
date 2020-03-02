import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { LinkContainer } from '../../utils/styled_components'

export const NotFound = () => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Page not found :(
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Time to go back
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <LinkContainer href="/">Return</LinkContainer>
        </Button>
      </CardActions>
    </Card>
  )
}

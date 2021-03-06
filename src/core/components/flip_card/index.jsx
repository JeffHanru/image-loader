import React from 'react'
import moment from 'moment'
import { Grid, Link, Modal, Box } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip'
import * as helper from '../../utils/helper'
import { TEXT_LENGTH_SETTING } from '../../utils'
import { LinkContainer } from '../../utils/styled_components'

const CardImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 180px;
  @media (min-width: 768px) {
    height: 20vw;
    min-height: 20vw;
  }
  @media (min-width: 1200px) {
    height: 14vw;
    min-height: 14vw;
  }
`
const cardStyle = {
  display: 'block',
  height: '480px',
  position: 'relative',
}

const cardActionAreaStyle = {
  height: '60%',
  cursor: 'default',
}

const cardActionStyle = {
  position: 'absolute',
  bottom: '0',
  left: '0',
}

const tagItemStyle = {
  margin: '2px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}

const showAllTagsStyle = {
  float: 'right',
  marginTop: '3px',
}

const modalStyle = {
  backgroundColor: 'white',
  border: '2px solid #000',
  margin: 'auto',
  width: '80%',
  marginTop: '10%',
  borderRadius: '20px',
  padding: '10px',
  outline: '0',
  overflowY: 'scroll',
  height: '400px',
}

export default class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      isFlipped: false,
      isModalOpen: false,
    }
  }

  onLearnMoreClicked = () => {
    this.setState({
      isFlipped: !this.state.isFlipped,
    })
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    })
  }

  resetAllWidgetStatus = () => {
    this.setState({
      isFlipped: false,
      isModalOpen: false,
    })
  }

  onTagClicked = tag => {
    const { updateFilterSettingByTag } = this.props
    updateFilterSettingByTag(tag)
    this.resetAllWidgetStatus()
  }

  render() {
    const { isFlipped = false, isModalOpen = false } = this.state
    const { item } = this.props
    const {
      title = '',
      media = {},
      author = '',
      published = '',
      tags = '',
      link = '',
    } = item
    const { m: previewImg = '' } = media
    const formattedPublishDate = moment(published).format('DD-MM-YYYY')
    const searchByTagsText = tags
      ? 'Search by following tags:'
      : 'No tags for this image'

    const tagsCollection = tags ? tags.split(' ') : []
    const firstEightTags = tagsCollection.slice(0, 8)
    const showTagsItem = firstEightTags && firstEightTags.length > 0
    const enableShowAll = tagsCollection.length > 8
    return (
      <>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Card style={cardStyle}>
            <CardActionArea style={cardActionAreaStyle}>
              <CardImg src={previewImg} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {helper.setStringLengthByNumber(
                    title,
                    TEXT_LENGTH_SETTING.SHORT
                  )}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                >
                  <div>Author: {author}</div>
                  <div>Published date: {formattedPublishDate}</div>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={cardActionStyle}>
              <Button size="small" color="primary">
                <LinkContainer href={link} target="_blank">
                  Full page
                </LinkContainer>
              </Button>
              <Button
                onClick={this.onLearnMoreClicked}
                size="small"
                color="primary"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card style={cardStyle}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {helper.setStringLengthByNumber(
                    title,
                    TEXT_LENGTH_SETTING.LONG
                  )}{' '}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                >
                  <div>Author: {author}</div>
                  <div>Published date: {formattedPublishDate}</div>
                  <div>{searchByTagsText}</div>
                  {showTagsItem && (
                    <Grid container direction="row">
                      {firstEightTags.map((item, index) => {
                        return (
                          <Button
                            style={tagItemStyle}
                            variant="outlined"
                            size="small"
                            color="primary"
                            onClick={() => this.onTagClicked(item)}
                            key={item + index}
                          >
                            {item}
                          </Button>
                        )
                      })}
                    </Grid>
                  )}
                  {enableShowAll && (
                    <Link
                      style={showAllTagsStyle}
                      href="#"
                      onClick={this.toggleModal}
                    >
                      Show all tags ->
                    </Link>
                  )}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={cardActionStyle}>
              <Button size="small" color="primary">
                <LinkContainer href={link} target="_blank">
                  Full page
                </LinkContainer>
              </Button>
              <Button
                onClick={this.onLearnMoreClicked}
                size="small"
                color="primary"
              >
                Back
              </Button>
            </CardActions>
          </Card>
        </ReactCardFlip>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isModalOpen}
          onClose={this.toggleModal}
        >
          <Box style={modalStyle}>
            <h4 id="simple-modal-title">Simply click the tag to search :)</h4>
            <Grid container direction="row">
              {tagsCollection.map((item, index) => {
                return (
                  <Button
                    style={tagItemStyle}
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={() => this.onTagClicked(item)}
                    key={item + index}
                  >
                    {item}
                  </Button>
                )
              })}
            </Grid>
          </Box>
        </Modal>
      </>
    )
  }
}

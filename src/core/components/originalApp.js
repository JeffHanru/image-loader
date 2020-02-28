import React from 'react'
import './App.css'

import { connect } from 'react-redux'
import { simpleAction } from '../actions/img-loader-actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
    }
  }

  onClick = () => {
    const { simpleAction } = this.props
    simpleAction()
  }

  render() {
    const { imgLoaderReducer } = this.props
    console.log(imgLoaderReducer)
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.onClick}>test test</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ imgLoaderReducer }) => ({
  imgLoaderReducer,
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

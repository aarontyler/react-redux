import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CounterActions } from './actions'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  click() {
    this.props.testClick();
  }

  render() {
    return (
      <div>
        <h1>Hello Redux</h1>
        <h2>Counter:{this.props.counter} </h2>
        <button onClick={this.click.bind(this)}>Click me</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testClick: () => dispatch(CounterActions("Add"))
  }
}

const mapStateToProps = (state) => {
  return state;
}

const DefaultApp = connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)

export default DefaultApp;
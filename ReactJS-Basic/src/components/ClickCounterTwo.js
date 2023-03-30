// 36). Render Props
// need to share common functionality b/w component and Render Props will help in it 
import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  render() {
    const {count, incrementCount } = this.props
    return (
      <button onClick={incrementCount}>Clicked {count} Times</button>
    )
  }
}

export default ClickCounterTwo

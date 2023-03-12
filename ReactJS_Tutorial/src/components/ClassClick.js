// 13).
// Event Handelling in Class Component

// react sniffet --> rce(for class component)

import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler() {
      console.log('Clicked the Button')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>ClickMe</button>
      </div>
    )
  }
}

export default ClassClick

// 37). sharing functionality using Render Props
// ClickCounterTwo and HoverCounterTwo and pass down the count state
// and incrementCount method
// any thinghs with opening and closing tag is pass as children prop which is then accessed to render the UI

import React, { Component } from 'react'

class Counters extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      
      incrementCount = () => {
          this.setState(prevState => {
              return { count: prevState.count + 1 }
          })
      }

  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default Counters

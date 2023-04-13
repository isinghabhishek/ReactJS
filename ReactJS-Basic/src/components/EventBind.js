// 14). Binding Event Handlers
// Here are 4 diffrent ways Binding Event Handlers in React.

import React, { Component } from 'react'

class EventBind extends Component {

constructor(props) {
  super(props)

  this.state = {
    message: 'Hello'
  }
  // #3). Binding in Class Constructor (recommendate)
  // this.clickHandler = this.clickHandler.bind(this)
}

//   clickHandler() {
//     this.setState({
//         message: 'Goodbye!'
//     })
//   }

// #4). Class property as Arrow fuction (recommendate)
clickHandler = () => {
    this.setState({
      message: 'GoodBye!'
    })
}

  render() {
    return (
      <div>
      <div>{this.state.message}</div>
    {/* 1). Binding in render, not so popular*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}  

    {/* 2). Arrow function in render */}
        {/* <button onClick={() => this.clickHandler()}>Click</button>   */}  
        <button onClick={this.clickHandler}>Click</button>  {/* 3).*/}
      </div>
    )
  }
}

export default EventBind

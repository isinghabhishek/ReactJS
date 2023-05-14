// 28). Refs

import React, { Component } from 'react'

class RefsDemo extends Component {

constructor(props) {
  super(props)
  this.inputRef = React.createRef()
  // Callback Ref
  this.cbRef = null
  this.setCbREf = element => {
    this.cbRef = element
  }
}

componentDidMount() {
    // this.inputRef.current.focus()
    // console.log(this.inputRef)

    if(this.cbRef) {
        this.cbRef.focus()
    }
}

clickHandler = () => {
    alert(this.inputRef.current.value)
}

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbREf}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo

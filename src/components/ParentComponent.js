// 15). Methods as props
// in the parent component defind the method, on the child component 
// tag pass the method as a props in the child component 

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

constructor(props) {
  super(props)

  this.state = {
     parentName: 'Parent'
  }
  this.greetParent = this.greetParent.bind(this)
}

greetParent(childName) {
  // template literals
  alert(`Hello ${this.state.parentName} from ${childName}`)
} 
// Tactics(``)

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent

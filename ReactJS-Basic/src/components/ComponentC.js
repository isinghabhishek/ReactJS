// 39). Context
// Context propvides a way to pass data through the component tree witout having 
// to pass props down manually at every level.
// 1. creating the context
// 2. Provide a context value
// 3. Consume the conext value

import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
  render() {
    return (
      <ComponentE />
    )
  }
}

export default ComponentC

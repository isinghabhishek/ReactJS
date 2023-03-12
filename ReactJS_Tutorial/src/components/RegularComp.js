// 26). Regular Component
// A regular component does not implement the shouldComponentUpdate method. It always returns true ny default.

// Shallow Comparison(SC)
// Primitive Types
// a(SC) b returns true if a and b have the same value and are of the same type
// Ex: string 'Abhishek' (SC) string 'Abhishek' returns true

// Complex Types
// a(SC) b returns true if a and b references the exact same objects

import React, { Component } from 'react'

class RegularComp extends Component {
  render() {
    console.log('*Regular Component Render*')

    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegularComp

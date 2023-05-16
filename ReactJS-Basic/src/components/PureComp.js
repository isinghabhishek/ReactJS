// 26). Pure Component
// A Pure component implmements shouldComponentUpdate with a shallow props and state copmarison
// SC of prevState with currentState   diffrences?
//                                     ==============>  Re-render component
// SC of prevProps with currentProps

// summary
// We can creat a component by extending the PureComponent class.
// A PureComponent implements theshouldComponentUpdate lifecycle method by performing a 
// shallow comparison on the props and state fot the component.
// if there is no diffrences, the component is not re-rendered - performances boost.
// it is a good idea to ensure that all the children component are also pure to avoid unexpected behaviour
// Neve mutate the state, Always return a new objects that reflects the new state.


import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('**Pure Component Render**')

    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp

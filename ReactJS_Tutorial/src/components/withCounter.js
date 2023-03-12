// 34). Higher Order Component - HOC

// Why Higher Order Component?
// To share common functionality between components

// A pattern where a function takes a component as an argument and returns a new component.
// const NewComponent = higherOrderComponent( originalComponent )
// const EnhancedComponent = higherOrderComponent( originalComponent )
// const IronMan = withSuit(TonyStark)

import React from "react";

const withCounter = (WrappeedComponent, incrementNumber ) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          
          incrementCount = () => {
              this.setState( prevState => {
                  return { count: prevState.count + incrementNumber}
              })
          }

        render() {
            return (
                <WrappeedComponent 
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props}
                />
            )
        }
    }
    return WithCounter;
}

export default withCounter;
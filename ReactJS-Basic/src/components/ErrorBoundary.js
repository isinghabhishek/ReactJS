// 32). Error Boundary
// A class component that implements either one or both of the lifecycle methods
// static getDerivedStateFromError or componentDidCatch become an error boundary

// Error Handling Phase Method
// static getDerivedStateFromError(error)
// componentDidCatch(error, info)

// the static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and 
// the componentDidCatch method is used to log the error information

// Summary
// Error boundaries are React component that catch JavaScript error in their child component tree, log those errors and display a fall-back UI.
// Aclass component become an Error Boundary by defining either or both of getDerivedStateFromError and componentDIdCatch lifecycle methods.
// The placement of the Error Boundary also matters as it controls if the entire app should have the fall-bac UI or just the component causing the problem.
// Provide a way to gracefully handle error in appplication code. 

import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    
  static getDerivedStateFromError(error) {
    return {
        hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }

  render() {
    if(this.state.hasError) {
        return <h1>Somthing went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary

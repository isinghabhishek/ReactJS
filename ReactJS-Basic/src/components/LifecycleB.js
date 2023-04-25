// 23). Component Mounting Lifecycle Methods
// 24). Component Updating Lifecycle Methods
// child components

import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Abhishek'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

  render() {
    console.log('LifecycleB render')
    return (
        <div>Lifecycle B</div>
    )
  }
}

export default LifecycleB

// Order Execution During Mounting

// LifecycleA constructor
// LifeCycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleB constructor
// LifeCycleB getDerivedStateFromProps
// LifecycleB render
// LifecycleB componentDidMount
// LifecycleA componentDidMount
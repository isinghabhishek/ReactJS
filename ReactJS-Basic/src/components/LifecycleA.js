// 23). Component Mounting Lifecycle Methods
// 24). Component Updating Lifecycle Methods

// parent components

// render and componentDidUpdate are commonlly used methods during update lifecycle 
// remaing exist for special cases 
// are i order of that they are invoked 

import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Abhishek'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Abhishek'
        })
    }

  render() {
    console.log('LifecycleA render')
    return (
        <div>
            <div>Lifecycle A</div>
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB />
        </div>
    )
  }
}

export default LifecycleA

// Order Execution During Mounting

// LifecycleA constructor
// LifeCycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleB constructor
// LifeCycleB getDerivedStateFromProps
// LifecycleABrender
// LifecycleB componentDidMount
// LifecycleA componentDidMount


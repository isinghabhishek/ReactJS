// 16).
// Conditional Rendering

// 1). if/else
// 2). Element Variables
// 3). Ternary conditional operator
// 4). short circuit operator

import React, { Component } from 'react'

export class UserGreet extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true
  }
}

  render() {

// 4). short circuit operator
    // if true then only then, render
    return this.state.isLoggedIn && <div>Welcome Abhishek</div>


// 3). Ternary conditional operator(it can be use inside JSX)(must use)
    // return(
    //     this.state.isLoggedIn ? (
    //     <div>Welcome Abhishek</div>
    //      ) : (
    //     <div>Welcomr Guest</div>
    //     )
    // )


// 2). Element Variables
    // let message 
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Abhishek</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


// 1). if-else stmt
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Abhishek</div>
    // }else {
    //     return <div>Welcome Guest</div>
    // }


// if-else stmt do'nt work inside JSX(html) tags

    // return (
    //   <div>
    //     <div>Welcome Abhishek</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreet

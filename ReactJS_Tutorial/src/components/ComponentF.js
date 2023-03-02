// 39). Context

import React, { Component } from 'react'
import { UserCosumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <UserCosumer>
        {
            (username) => {
                return <div>Hello {username}</div>
            }
        }
      </UserCosumer>
    )
  }
}

export default ComponentF

// 21). Basics of Form Handling

import React, { Component } from 'react'

class Form extends Component {

constructor(props) {
  super(props)

  this.state = {
     username: '',
     comments: ''
  }
}

handleUsernameChange = (event) => {
    this.setState({
        username: event.target.value
    })
}

handleCommentsChange = (event) => {
    this.setState({
        comments: event.target.value
    })
}

handelTopicChange = (event) => {
    this.setState({
        topic: event.target.value
    })
}

handelSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}

  render() {
    const { username, comments, topic } = this.state
    return (
      <form onSubmit={this.handelSubmit}>
        <div>
            <label htmlFor="">Username</label>
            <input 
            type="text" 
            value={username}
            onChange={this.handleUsernameChange}    
            />
        </div>
        <div>
            <label htmlFor="">Comments</label>
            <textarea 
            value={comments} 
            onChange={this.handleCommentsChange} name="" id="" cols="20" rows="2">
            </textarea>
        </div>
        <div>
            <label htmlFor="">Topic</label>
            <select value={topic} onChange={this.handelTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type="sumbit">Submit</button>
      </form>
    )
  }
}

export default Form

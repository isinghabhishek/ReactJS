// 41). React and HTTP
// react simply read props and state and render the UI 
// to use data from server you just have to get the data into your components props or state
// for that we will be using HTTP libary 'Axios'--> for fetching the API
// 42). HTTP Get Request

import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: ''
      }
    }

    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }
    
  render() {
    const { posts, errorMsg } = this.state
    return (
      <div>
        List Of Posts
        {
            posts.length ? 
            posts.map(post => <div key={post.id}>{post.title}</div>) : null
        }
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}

export default PostList

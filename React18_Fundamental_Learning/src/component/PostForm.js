import { useState } from 'react'

// post request in react app 

export const PostForm = () => {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

const submitHandler = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title',
        ody: 'body',
        userId: userId,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input 
                type="text" 
                placeholder="User Id" 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div>
                <input type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <input 
                type="text" 
                placeholder="Body" 
                value={body} 
                onChange={(e) => setBody(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}
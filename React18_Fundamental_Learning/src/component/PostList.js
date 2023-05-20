import { useState, useEffect  } from "react";

// fectching data through API

export const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return <div>
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    </div>
}
import { useState } from 'react';

export const Form = () => {
    const [username, setUsername] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Form data is ${username}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>UserName</label>
            <input type="text" value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
        </div>
        <button type='submit'>Submit</button>
        </form>
    )
}
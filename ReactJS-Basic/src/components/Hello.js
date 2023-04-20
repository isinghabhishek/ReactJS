// 08). JSX

import React  from "react";

const Hello = () => {

// JSX Code

    // return (
    //     <div>
    //         <h1>Hello, Abhishek Singh</h1>
    //     </div>
    // )

    // without JSX
    return React.createElement(
        'div', 
        null, // object with value-key pair
        React.createElement('h1', null, 'Hello, Abhishek')
    )
}

export default Hello
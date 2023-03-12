// 06). class components
// class extending Component class
// Render method returning (JSX)HTML

// Destructuring props in class component

import React, { Component } from "react";

class Welcome extends Component {
    render() {
// 1). Destructuring props or state in the render methods
        const {name, heroName} = this.props // Destructuring props
        
        // const {state1, state2} = this.state // Destructuring state
        return (
            <h1>
                Welcome {name} a.k.a {heroName} 
            </h1>
        )
    }
}

export default Welcome
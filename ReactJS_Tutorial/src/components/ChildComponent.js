// 15).
// passing parameters from child to parent
// passing method as props in react components

import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

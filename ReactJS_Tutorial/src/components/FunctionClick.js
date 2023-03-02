
// 13).
// Event Handelling in Fuction Component

// react sniffet --> rfce(functional component)
// we pass fuction as the  evevt handler rather than a string so instead

import React from 'react'

function FunctionClick() {

    function clickHandeler() {
      console.log('Button Clicked')
    }

  return (
    <div>
      <button onClick={clickHandeler} >Click</button>
    </div>
  )
}

export default FunctionClick

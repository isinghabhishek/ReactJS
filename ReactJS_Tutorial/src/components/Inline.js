// 20). Styling React Components

import React from 'react'

const heading = {
    fontSixe: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline

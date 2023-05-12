// 20). Styling React Components
// 1). CSS stylesheets
// 2). Inline styling
// 3). CSS Modules
// 4). CSS in JS Libaries

import React from 'react'
import './myStyles.css';

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet

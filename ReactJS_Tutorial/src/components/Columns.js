// 25). React Fragments
// React Fragment let you to group a list of children elements without adding
// extra nodes to DOM.

import React from 'react'

function Columns() {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Abhishek</td>
    </React.Fragment>
  )
}

export default Columns

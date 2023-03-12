// 25). React Fragments
// React Fragment let you to group a list of children elements without adding
// extra nodes to DOM.

import React from 'react'
import Columns from './Columns'

function Table() {
  return (
    <table>
      <tbody>
        <tr>
            <Columns />
        </tr>
      </tbody>
    </table>
  )
}

export default Table

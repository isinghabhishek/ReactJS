// 17). List Rendering

// 18). Lists and Keys
// A "key" is a special string attribute you need to include when creating lists of elements.
// keys give the elemnts a stable identity.
// keys help React identify which items have changed are added, or are removed.
// helps in efficient update of the user interface.

// 19). Index as key Anti-pattern
// when to use index as a key? (must satisfied all)
// 1. The items in your list do not have a unique id.
// 2. The list is a static list and will not change.
// 3. The list will never be reordered or filtered.

import React from 'react'
import Person from './Person'

function NameList() {
    const person = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Diana',
            age: 28,
            skill: 'JavaScript'
        },
        {
            id: 1,
            name: 'Clark',
            age: 32,
            skill: 'Vue'
        }
    ]
    const personList = person.map(person => <Person key={person.name} person={person} />)
  return (
    <div>{personList}</div>
  )
}

export default NameList

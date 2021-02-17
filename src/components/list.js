import React, {useContext} from 'react'
import {NumberContext} from '../App'
export const Item = () => {
  return (
    <li>
    </li>
  )
}
const List = () => {
  
  const context = useContext(NumberContext)
  let state = context
  console.log(state);
  return (
    <div>
      <ul>
        <Item />
      </ul>
    <h3>{state.peopol}</h3>
    </div>
  )
}

export default List

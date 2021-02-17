import React, {useContext} from 'react'
import {NumberContext} from '../App'

const handelSubmit = (e) => {
  e.preventDefault()
}
const Formm = () => {
  const context = useContext(NumberContext)
  let state = context
  console.log(state);
  return (
    <form onSubmit={(e) => {handelSubmit(e)}}>
      <input type="text" name="name" id="name" />
      <button onClick={() => {state.dispatch('add')}}>add</button>
      <button onClick={() => {state.dispatch('down')}}>down</button>
    </form>
  )
}

export default Formm

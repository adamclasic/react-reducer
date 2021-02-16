import './App.css';
import React, {useState, useReducer, useEffect, createContext} from 'react'
import Formm from './components/form'
import List from './components/list'

const connect = async () => {
  let data = await fetch('https://api.github.com/users')
  let jdata = await data.json()
  return jdata

}

function App() {
  const reducer = (state, action) => {
    if (action === 'add') {
      let returned = state + 1 
      return returned
    }

    if (action === 'down') {
      return state - 1 
    }
    
    return state
  }

  useEffect(() => {
    
    return () => {
      state.peopol = connect();
    }
  }, [])
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, {peopol: []})

  return (
    <div className="App">
      <Formm />
      <List />
      <h3>{state.peopol}</h3>
      {/* <button onClick={() => {dispatch('add')}}>add</button> */}
      {/* <button onClick={() => {dispatch('down')}}>down</button> */}
    </div>
  );
}

export default App;

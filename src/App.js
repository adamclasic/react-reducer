import './App.css';
import React, {useState, useReducer, useEffect, createContext} from 'react'
import Formm from './components/form'
import List from './components/list'

const NumberContext = React.createContext();

function App() {
  const reducer = (state, action) => {
    state = {...state}
    if (action === 'add') {
      state.peopol = state.peopol + 1 
      console.log(state);
      return state
    }

    if (action === 'down') {
      state = {...state}
      state.peopol = state.peopol - 1 
      console.log(state);
      return state
    }
    
    return state
  }

  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, {peopol: 0})

  return (
    <div className="App">
      <NumberContext.Provider value={{state: state, dispatch: dispatch}}>
        <Formm />
        <List />
      </NumberContext.Provider>
    </div>
  );
}

export {App, NumberContext};

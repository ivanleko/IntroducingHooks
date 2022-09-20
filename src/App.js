import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';
import { Button } from 'bootstrap';

function reducer(state,action){
  switch (type, action){
    case "increment": return state + 1
    case "decrement": return state - 1
  }
}
function App (){
  const [state, dispatch] = useReducer(reducer, 0)
  return(
    <Button onClick={()=> dispatch({type: "increment"})} > + </Button>,
    <Button onClick={()=> dispatch({type: "decrement"})} > - </Button>
  );
}

export default App;

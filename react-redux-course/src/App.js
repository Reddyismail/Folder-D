import React from 'react'
//import logo from './logo.svg';
//import './App.css';
//import State from './components/Usestate';
//import UseReducer from './components/Usereducer'
//<State/>
//<UseReducer/>

import { useSelector,useDispatch } from 'react-redux'

const App = () => {
  
  const myState = useSelector((state)=>state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <div>
     <input  type="button"onClick= {() => dispatch(IncNumber())}>+</input>

      <input name="quantitiy_minus" type="text" value={ myState}></input>

      <a href=""onClick= {() => dispatch(DecNumber())}><span> - </span></a>
    </div>
  )
}

export default App;


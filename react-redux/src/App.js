 //import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './actions/index';

function App() {
  const myState= useSelector((St)=>St.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className="App">
     <h1>Hallow this is Redux</h1>
     <div className="quantity">
        <button onClick={()=>dispatch(decrement())}><span>-</span></button>
          <p>{myState}</p>
          <button onClick={()=>dispatch(increment())}><span>+</span></button>
     </div>
    </div>
    </>
  );  
}


export default App;

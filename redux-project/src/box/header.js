import React from 'react'
//import store from './store';
import {useSelector,useDispatch} from 'react-redux'
import { Increment,Decrement } from '../action';
const Header = ()=>{
    const myStore = useSelector((st)=>st.ChangeTheNumber);
    const dispatch= useDispatch();
    return(
        <div>
            <h1>hallow</h1>
                Hallow this the <br/>
                <button onClick={()=>dispatch(Increment())}>Increment</button>
                <p>{myStore}</p>
                <button onClick={()=>dispatch(Decrement())}>Decrement</button>
           
        </div>
    )
}
export default Header;
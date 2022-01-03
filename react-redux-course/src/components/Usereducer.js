import React,{useReducer} from 'react'

const initialState=0;

const reducer = (state,action) =>{

    //console.log(state, action);
    if(action.type==="INCREMENT"){
        return state+1;
    }
    else if(action.type==="DECREMENT"){
        return state-1;

    }


return state;
}
const  UseReducer=()=>{

const [state, dispatch] = useReducer(reducer,initialState);
   // const [count,setCount]=useState(0)
    return(
        <div>
           
            <p>{state}</p>
            <button onClick={()=> dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=> dispatch({type:"DECREMENT"})}>-</button>
           

        </div>
    )
}
export default UseReducer

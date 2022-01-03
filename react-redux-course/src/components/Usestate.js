import React,{useState,useEffect} from 'react'

export default function Message(){
    const [username,setUsername]=useState("this is ismail")
    const [count,setCount]=useState(0)
    //console.log(count)
    useEffect(()=>console.log(count),[count])
    return(
        <div>
            <h1>{username}</h1>
           <button onClick={()=>setCount(count+1)}>+</button>
           <p>{count}</p>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setUsername("this is current")}>button</button>

        </div>
    )
}

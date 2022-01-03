import React,{useState} from 'react'

const State = ()=> {
    const [value,setValue]= useState("ismail");

    return(
        <div>
                hallow{value}
                <button onClick={()=>setValue("reddy")}></button>
        </div>
    )

}
export default State
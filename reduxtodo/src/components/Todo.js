import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {Incerment, deleteTodo ,removeTodo} from './action/index.js'

const Todo = () => {
    const [InputData, setInputData] = useState('');
    const dispatch = useDispatch()
    return (
        <div>
           <div className="main-div">
         <div className="child-div">
            <figure>
              <figcaption>Add your list here</figcaption>
            </figure>

            <div className="addItems">
              <input type="text" placeholder="write here ...."

               value={InputData} 

               onChange={(event)=>setInputData(event.target.value)}/>

              <i className="fa fa-plus add-btn" onClick={()=>dispatch(Incerment(InputData))}></i>
            </div>
         </div>
      </div> 
        </div>
    )
}

export default Todo

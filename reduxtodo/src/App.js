import React from 'react'
//import Todo from './components/Todo'

import { connect} from 'react-redux'
import { IncAction } from './Redux_react/actions'
import { DecAction } from './Redux_react/actions'
import  Function  from './function'
const App = ({local_variable,IncAction,DecAction}) => {
  return (
    <div>
     { local_variable}
    <button onClick={IncAction}>IncAction</button>
     <button onClick={DecAction}>DecAction</button>
     <Function/>
    </div>
    /*
    <Todo/>
     */
  )
}
const mapStateToProps = state =>({
  local_variable:state
})

export default connect(mapStateToProps,{IncAction,DecAction})(App);

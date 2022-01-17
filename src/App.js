import "./style.css"
import {useSelector , useDispatch} from "react-redux"
import {increment , decrement , reset} from "./redux/actions"
let App = ()=>{

  let state = useSelector((state)=>state)

  let dispatch = useDispatch();
  return (
    <div className = "container">
    
    <button onClick = {
      ()=>{dispatch(increment())}
    }>+</button>
    <p>{state}</p>
    <button onClick = {
      ()=>{dispatch(decrement())}
    }>-</button>
    
    <button onClick={
      ()=>{dispatch(reset())}
    }>reset</button>

    </div>
  )
}

export default App
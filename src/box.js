import "./style1.css"
let Box = (props)=>{
    function handleClick(){
        console.log(props.value +"has been clicked")
    }
    return(
        <div onClick = {handleClick} className = "container" >
              {props.value}
        </div>
    )
}
export default Box;
import "./style1.css"
import React from "react"
let check = true
let Box = (props)=>{
    const [value, setValue]  = React.useState("")
   
    function func(){
        if(check){
            setValue("X")
            check = false
        }
        else{
            setValue("O")
            check = true
        }
    }
    
    return(
        <div onClick = {func} className = "container" >
              {value}
        </div>
    )
}
export default Box;
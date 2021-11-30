import "./style.css"
let Comp = ()=>{
return(
    <>
    <header>
       <nav className = "nav">
           <img src = "logo512.png" className = "image"></img>
           <ul className = "unordered">
               <li>Pricing</li>
               <li>About</li>
               <li>Contact</li>
           </ul>
       </nav> 
       
       <h1 className = "content">React FrameWork</h1>
       <ul >
            <li >It's a popular library, so I'll be </li>
            <li >I'm more likely to get a job as a developer
            if I know React</li>
        </ul>
        
    </header>
    </>

)
}

export default Comp;

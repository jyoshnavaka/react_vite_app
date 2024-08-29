import React, { useState } from "react"
import { loop } from "./sample"
 export const EvenOdd=()=>{
const[count,setCount]=useState("")
const evenOrOdd=(i)=>{

if(i%2){
  setCount("Odd")
}
else{
  setCount("even")
}
}

    
return(
    <>
    <h1>The element is  {count}</h1>
    {
      loop.map(each=>{
  return(<React.Fragment key={each}>
   <div style={{width:150,display:"inline-block"}}> <p>i am {each}</p>
   <button onClick={()=>evenOrOdd(each)} >click</button></div> 
  </React.Fragment> )
      })
      
    }

    </>
)
}

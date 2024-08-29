import { Component } from "react";

export class Converter extends Component{
   change=(event)=>{
         var a=(event.target.value*9/5)+32
    console.log(a)
        
    }
    render(){
        return(
            <>
            <input type="tel" onChange={this.change} />
           
           
            </>
        )
    }
}

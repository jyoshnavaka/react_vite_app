import axios from "axios";
import { Component } from "react";

export class CustomTable extends Component{
state={
    data:[]
}
componentDidMount(){
    this.getData()
}
getData=async()=>{
    const data=await axios.get("https://fakestoreapi.com/products")
    console.log(data)
    this.setState({
        data:data.data
    })
    
}


    render(){
       // debugger
        return(
            <>
            
            <table>
            
                {
                this.state.data.map((each)=>{
                    return(
                        <>
                        <tr>
                            <td>{each.id}</td>
                            <td><h4>{each.title}</h4></td>
                            <td><img src={each.image} width={100} height={100}/></td>
                            <td><button>{each.price}</button></td>
                        </tr>
                        </>
                    )
                })
                }
            </table>
            </>
        )
    }
}
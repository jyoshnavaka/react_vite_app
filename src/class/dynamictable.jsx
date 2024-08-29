import axios from "axios";
import React, { Component } from "react";

 export class DynamicTable extends Component{
    state={
        array:[],
        data:[],
        count:0,
        display:false
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData=async()=>{
const data1=await axios.get("https://fakestoreapi.com/products")
//console.log(data1)
this.setState({
    data:data1.data
    
})
    }
addData=()=>{
    const{array,data,count}=this.state
    const newData=[...array,data[count]]
    console.log(newData);
   if(data.length>0){
    this.setState({
        array:newData,
        count:this.state.count+1
    })
   }
}
display=()=>{
this.setState({
    display:true
})
}

    render(){
        return(
            <>
<table border="1" >
    <tr><th>logo</th><th >products</th></tr>
    <tr><td><button onClick={this.display}>Home</button><button>about</button><button>Contact</button></td>
    <td>  
    
        <button onClick={this.addData}>add</button>
        { this.state.display?<div >
        <table border="1" >
            <tr><th>id</th><th>title</th><th>image</th><th>price</th></tr>{
                this.state.array.map((each)=>{
                    return(
                        <React.Fragment key={each.id}>
                       <tr>
                       <td>{each.id}</td>
                           <td>{each.title}</td>
                           <td><img  style={{width:100,height:100}} src={each.image}/></td>
                           <td><button>{each.price}</button></td>
                       </tr>
                   </React.Fragment>
                    )
                })
            }
        </table>
        </div>:<></>
    }
    </td>
    </tr>
</table>
            </>
        )
    }
 }
import axios from "axios";
import { Component } from "react";

export class DisplayItems extends Component{
    state={
        data:[],
        image:"",
        flag:false
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData=async()=>{
const {data}=await axios.get("https://fakestoreapi.com/products")
this.setState({
    data:data
})
    }

   image=img=>{
this.setState({
    image:img,
    flag:true
})
    }
    render(){
        return(
            <div style={{display:"flex"}}>
           <div>
            {
                this.state.data.map((each)=>{
                    return(
                        <>
                        <div style={{width:300}}>
                            <p>{each.title}</p>
                            <img src={each.image} width={100} height={100} onClick={()=>this.image(each.image)}/>
                            <p>{each.description}</p>
                         </div>
                         
                        
                         </>
                    )
                  
                })
            }
           </div>
            {
                this.state.flag?<div style={{width:500,height:500,margin:10}}>
                <img src={this.state.image} width={350} height={350}/>
             </div>:<></>
             }
              </div>
        )
    }
}
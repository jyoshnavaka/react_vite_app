import axios from "axios";
import { Component } from "react";
import { Card, Loader } from "..";

export class FakeStoreData extends Component{
    state={
        data:[],
        loader:true,
        categories:[]
    }
    componentDidMount(){
        this.fetchData()
        //this.categories()
    }
    
fetchData=async()=>{
const data=await axios.get("https://fakestoreapi.com/products")
const data1=await axios.get("https://fakestoreapi.com/products/categories")

this.setState({
    data:data.data,
    categories:data1.data,
    loader:false
   
})
}
search=async(each)=>{
    const data=await axios.get(`https://fakestoreapi.com/products/category/${each}`)
    this.setState({
        data:data.data
    })
    
}
render(){
    return(
        <>
        {
        this.state.loader?<Loader/>:<>
         {
    this.state.categories.map((each,index)=>{
            return(<div><button key={index}  style={{display:"inline-block"}} onClick={()=>this.search(each)} > {each}</button> </div>)
        })
    }
        {
     this.state.data.map((each)=>{
return( <Card key={each.id} name={each.title} image={each.image} desc={each.description}/>)
        })
    }
   
 </>
}
</>
    );
 }
}
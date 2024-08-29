import axios from "axios";
import { Component } from "react";

export class AddDelete extends Component{
state={
    data:[],
    emp:[],
    count:0,

}

componentDidMount(){
    this.fetch()
}
fetch=async()=>{
const {data}=await axios.get("https://dummyjson.com/recipes")

this.setState({
    data:data.recipes
})
}
addElement=()=>{
    const{data,emp,count}=this.state
  const  newEmp=emp.concat(data[count])
  if(count<data.length){
    this.setState({
        emp:newEmp,
        count:count+1,
        
    })
}
}
deleteElement=(index)=>{
    const{emp,count}=this.state
    //console.log(emp)
  const newDe=emp.filter((each,ind)=>( ind!==index))
this.setState({
      emp:newDe
   
})
//console.log(emp)
}
render(){
    return(
        <>
        <button onClick={this.addElement}>ADD</button>
    {
    this.state.emp.map((each,index)=>{
        return(<>
        <div style={{width:200,height:200,display:"inline-block"}}>
        <h4>
            {each.name}
        </h4>
        <img src={each.image} width={100} height={100}/>
        <button style={{background:"blue",color:"white",display:"block"}} onClick={()=>this.deleteElement(index)}>DELETE</button>
        </div>
        </>)
    })
}     
        </>
    )
}
}
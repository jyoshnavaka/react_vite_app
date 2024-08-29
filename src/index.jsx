import { Children, Component } from "react"
import { Vortex } from "react-loader-spinner";
import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 const Cards=(props)=>{
  const{text,children}=props;
    return(
        <>
        <h1>hello world</h1>
        <h2>{text}</h2>
        {children}
        <button>submit</button>
        </>
    )
}
 

 export class Count extends Component{
    state={
        count:0
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{})
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            <Toast></Toast>
        })
    }
    reset=()=>{
        this.setState({
            count:0
        },()=>{})
    }
    render(){
        return (
            <>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
        </>
    )
    }
}

export const Loader=({height=100,width=100})=>{
    return(
        <>
       <Vortex
  visible={true}
  height={height}
  width={width}
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'pink', 'orange', 'purple']}
  />
        </>
    )
}


export const Toast=()=>{
    
        const notify = ()=>{
          
            toast.success(`count is ${this.state.count}`, {
              position: "top-center"
            });
        };
        return(
            <>
              <button onClick={notify}>Notify</button>
              <ToastContainer />
            </>
        )
    
    
}
 export const List =({list})=>{
    return(
     <ol>
    <>
    {
list.map((item,index)=>{
    return(
        
        <li key={index}>{item}</li>
    )
})
 }
</>
</ol>
)}



export const Card=({name,image,desc})=>{
    return(
        <>
        <div style={{width:370,display:"inline-block",height:250}}>
        <h4>{name}</h4>
        <img src={image} width={100}/>
        <p>{desc}</p>
       </div>
        </>
    )
}


export default Cards

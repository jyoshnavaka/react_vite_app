import { useReducer, useState } from "react";
const reducerFunction=(state,action)=>{
    switch(action.type){
        case "add-data":
            return {...state,todo:[...state.todo,action.payload]}
         case "Delete":
            return{...state,todo:action.payload} 
          case "update-data":
            const a=[...state.todo];
            a[action.index]=action.payload
            return {...state,todo:a}   
            default :
            return state   
    }
}

function Reducer(){
    const data={
        todo:[]
    }
    const [todoData,setTodoData]=useState("")
const [index,setIndex]=useState(null)

    const [currentState,dispatchFunction]=useReducer(reducerFunction,data);
    const onChange=(event)=>{
        setTodoData(event.target.value)
        
    }


 const onclick=()=>{
    if(index!=null){

        dispatchFunction({
            type:"update-data",
            payload:todoData,
            index: index
    
        });
        setIndex(null)
    }
    else{
    dispatchFunction({
type:"add-data",
payload:todoData
    })
    setTodoData("")
 }}


 const onDelete=(index)=>{
const filterData=currentState.todo.filter((_,i)=>index!==i)


dispatchFunction({
    type:"Delete",
    payload:filterData
})

 }
 const onUpdate=(index)=>{
   
  
    setTodoData(currentState.todo[index]);
    setIndex(index);

    }
    return (<>
    <input type="text" value={todoData} onChange={onChange}/>
    <button onClick={onclick}>add</button>
{
    currentState.todo.map((each,index)=>{
        return(
           
            <p>{each} <button onClick={()=>onDelete(index)}>delete</button><button onClick={()=>onUpdate(index)}>update</button></p>
           
           
        )
    })
}
    </>)
}
export default Reducer;
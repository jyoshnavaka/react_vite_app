import { useReducer, useState } from "react";
const reducerFunction=(state,action)=>{
    switch(action.type){
        case "add-data":
            return {...state,todo:[...state.todo,action.payload]}
         case "Delete":
            return{...state,todo:action.payload}   
            default :
            return state   
    }
}

function Reducer(){
    const data={
        todo:["JavaScript","React JS"]
    }
    const [todoData,setTodoData]=useState("")


    const [currentState,dispatchFunction]=useReducer(reducerFunction,data);
    const onChange=(event)=>{
        setTodoData(event.target.value)
        
    }
 const onclick=()=>{
    dispatchFunction({
type:"add-data",
payload:todoData
    })
    setTodoData("")
 }


 const onDelete=(index)=>{
const filterData=currentState.todo.filter((_,i)=>index!=i)

console.log(filterData)
dispatchFunction({
    type:"Delete",
    payload:filterData
})

 }
 const onUpdate=(index=>{
    onChange(index);
    })
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
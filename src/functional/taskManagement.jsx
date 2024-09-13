import { useState } from "react"

function TaskManagement(){
const [input,setInput]=useState({
    name:"",
    designation:"",
    startDate:"",
    endDate:"",
    priority:""

    
})
const [object,setObject]=useState([])
const handlerInput=(event)=>{
const {name,value}=event.target;

//console.log(name,value)
setInput({...input,
    [name]: value})

}


const onSubmit=(event)=>{
    event.preventDefault()
setObject([...object,input])
setInput("")
}
return(<>
<form>
    <label htmlFor="name">Name:</label>
    <input value={input.name} name="name" type="text" onChange={handlerInput}/>
<br/>
<label htmlFor="designation">Designation :</label>
    <input value={input.designation} name="designation" type="text" onChange={handlerInput}/>
    <br/>
    <label htmlFor="startDate">Date of Start : </label>
    <input value={input.startDate} name="startDate" type="date" onChange={handlerInput}/>
    <br/>
    <label htmlFor="endDate">Date of End :</label>
    <input value={input.endDate} name="endDate" type="date" onChange={handlerInput}/>
    <br/>
<label htmlFor="priority" >Priority :</label>
    <select name="priority"  value={input.priority} onChange={handlerInput} >
    <option >none_of_this</option>
    <option value="low">low</option>
  <option value="medium">medium</option>
  <option value="high">high</option>

    </select>
    <br/>
    <input type="submit" onClick={onSubmit}/>
</form>
{
    object.map(each=><>
    <pre>{JSON.stringify(each)}</pre>
    </>)
}
</>)
}
export default TaskManagement
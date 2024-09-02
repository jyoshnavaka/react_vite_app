import { useState } from "react"
import "./form.css"

 export const TableForm=()=>{
   const [data,setData]=useState([])
   const obj={
    
    home:false
   }
   const [display,setDisplay]=useState(obj)
    const [modal,setModal]=useState(false);
   const Submit=((event)=>{
    event.preventDefault()
     const Data={
id:event.target[0].value,
username:event.target[1].value,
password:event.target[2].value
     }
setData([...data,Data])
})
const OnDisplay=()=>{
    setDisplay((prevDisplay) => ({
        ...prevDisplay,
        home: true,
      }));
      
}
const toggleModal=()=>{
setModal(!modal)
}



    return(<>
   <div style={{display:"flex"}}>

 <div style={{
    display:"flex", flexDirection:"column",width:"20%"
 }}>
  <h3>logo</h3>  
<h4><button onClick={OnDisplay}>Homes</button></h4>
<h4><button>About</button></h4>
<h4><button>Contacts</button></h4>

 </div>

 <div style={{width:"80%"}}>
<p>display</p>
  <div style={{width:300,height:400}}>
    <button onClick={toggleModal} className="btn-modal">add</button>
    {
        display.home? <table>
        <tr>
        <td>id</td>
     <td>username</td>
     <td>password</td>
  </tr>
   
{
data.map((each)=>{
   return(
   <tr>
       <td>{each.id}</td>
       <td>{each.username}</td>
       <td>{each.password}</td>
   </tr>
   )
})
}
</table>:<></>
    }
</div>

 </div>
 </div>
{modal && (
  
  <div className="modal">
   <div className="overlay" onClick={toggleModal}></div>
   <div className="modal-content">
   <form onSubmit={Submit}>
       <label>Enter Id:</label>
       <input type="text" />
       <br/>
       <label>Username:</label>
       <input type="text"/>
       <br/>
       <label>Password:</label>
       <input type="password"/>
       <br/>
       <input type="submit" />
       <button className="close-modal" onClick={toggleModal}>close</button>
   </form>
   </div>
  </div>
   
)
}
    </>)
}

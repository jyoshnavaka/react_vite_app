import axios from "axios"
import { useRef, useState } from "react"

 export const FormValidation=()=>{
    const usernameRef=useRef("")
    const passwordRef=useRef("")
    const [formError,setFormErrors]=useState({})
    const [data,setData]=useState({})

   const onSubmit=(event)=>{
    event.preventDefault();
    const username=usernameRef.current.value;
    const password=passwordRef.current.value;
    const formError=validations(username,password);
    if(Object.keys(formError).length!=0){
       setFormErrors(formError)
    }
else{
     login(username,password)
}

    }

  const  login=async(username,password)=>{
try{
  const result=await axios.post("https://dummyjson.com/auth/login",{
    "username":username,
    "password":password

  })
  setData(result.data)
  console.log(data)
  
}catch(err){
  console.error(err)
}
    }

    const validations=(username,password)=>{
const formError={

}
if(!username){
    formError.usernameError="please enter username";
}
else if(username.length>20){
    formError.usernameError="please enter username length less than 20";
}

if(!password){
    formError.passwordError="please enter password";
}
else if(password.length>20){
    formError.passwordError="please enter password length less than 20";
}

return formError

    }
    return(
    <>
    <form  onSubmit={onSubmit} >
  <div className="form-group">
    <label htmlFor="username">username:</label>
    <input type="text" className="form-control" id="username"  ref={usernameRef}  />
    <span style={{color:"red"}} >{formError?.usernameError}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
    <span style={{color:"red"}} >{formError?.passwordError}</span>
  </div>

  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>
<p>id:{data.id}</p>
<p>username:{data.username}</p>
<p>firstName:{data.firstName}</p>
<p>lastName:{data.lastName}</p>
<p>email:{data.email}</p>
<p><img src={data.image}/></p>

    </>
    )
}
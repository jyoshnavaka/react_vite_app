import { useRef } from "react"

 export const FormValidation=()=>{
    const usernameRef=useRef("")
    const passwordRef=useRef("")
   const onSubmit=(event)=>{
    event.preventDefault();
    const username=usernameRef.current.value;
    const password=passwordRef.current.value;
    const object=validations(username,password);
    if(Object.keys(object).length!=0){
        alert("invalid error")
    }
else{
     
}

    }

    const validations=((username,password)=>{
const formError={

}
if(username.length==0){
    formError.usernameError="please enter username";
}
else if(username.length<=20){
    formError.usernameError="please enter username";
}

if(password.length==0){
    formError.passwordError="please enter password";
}
else if(password.length<=20){
    formError.passwordError="please enter password";
}
return formError

    })
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


    </>
    )
}
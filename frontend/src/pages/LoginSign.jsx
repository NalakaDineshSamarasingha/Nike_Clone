import React from "react";
import "./css/LoginSign.css"
import { useState } from "react";

const LoginSign = () => {
    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:"",
    })

    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async ()=>{
        let responseDate;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'content-type':'application/json',
            },
            body: JSON.stringify(formData)
        }).then((response)=>response.json()).then((data)=>responseDate=data)

        if(responseDate.success){
            localStorage.setItem('auth-token',responseDate.token);
            window.location.replace("/");
        }else{
            alert(responseDate.errors)
        }
    }
    const signup = async ()=>{
        let responseDate;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'content-type':'application/json',
            },
            body: JSON.stringify(formData)
        }).then((response)=>response.json()).then((data)=>responseDate=data)

        if(responseDate.success){
            localStorage.setItem('auth-token',responseDate.token);
            window.location.replace("/");
        }else{
            alert(responseDate.errors)
        }
    }

    return(
        <div className="loginsign">
            <div className="loginsign-container">
                <h1>{state}</h1>
                <div className="loginsign-fields">
                    {state==="Sign Up"?<input type="text" placeholder="Name" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={changeHandler}/>
                    <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"?<p className="loginsign-login">Allready have an account <span onClick={()=>{setState("Login")}}>Login here</span></p>:<p className="loginsign-login">Create an account <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
                <div className="agree">
                    <input type="checkbox" name="" id=""/>
                    <p>I agree to the term of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSign
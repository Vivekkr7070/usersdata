import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import  "./lgcss/lg.css"
import Records from "./login.json"

export default function Loginpage() {
    const navigate= useNavigate();
    const [employee,setemployee]=useState();
    const [email,setEmail]=useState();
    const [name,setName]=useState();
     
    useEffect(()=>{
        const employeed = async () => {
          setemployee(Records)
        }
        employeed();
    },[]);

useEffect(()=>{
    let login=localStorage.getItem("login")
    if(login){
        navigate("/indexpage")
    }
})      

const login=()=>{
        if(((employee.employee[0].name)===name)&&(employee.employee[0].email===email)){
            localStorage.setItem("login",true);     
              navigate("/indexpage");
    }
    else{
        alert("Not matching creditonals")
    } 
}

    return (
        <div>
            <h3 id="welcome">Welcome to login page</h3>
            <div className="lgcontainer">
                <div className="formcontainer">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="text" className="form-control" placeholder="Enter your name" value={name}  onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <input type="email" className="form-control" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-info" onClick={login}>Login</button>
        </div>
    )
}

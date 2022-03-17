import React
, { useState , useRef} from 'react'
import {Container,Row , Col} from 'react-bootstrap';
import './Login.css';

import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";


 function Login() {
    // const [user,setuser]=useState({email:'',password:''})
const [type,settype]=useState("password")
const [icon,seticon]=useState(AiFillEyeInvisible)
const emailRef = useRef("");
const passref= useRef("");

const handleToggle=()=>{
  if(type==="password"){
    seticon(AiFillEye);
    settype("type")
  }
else{
  seticon(AiFillEyeInvisible);
    settype("password")
}
}
const handelClick = () => {
  if (emailRef.current.value && passref.current.value !== "") {
    alert("با موفقیت وارد شدید");
  }
};
// const refreshPage=() =>{


//     window.location.reload(false);
  
// }

  return (
    <>
  <div className="login">
   
  <h3 className="text-center"> خوش آمدید</h3>
    <input type="email" placeholder="پست الکترونیک" className="mb-3 mt-3" id="input"  ref={emailRef} required/>
 
    <div className="inputpass">
    <input type={type}  placeholder="کلمه عبور" className="mb-3" id="input" required ref={passref} />
    <span onClick={handleToggle}>{icon}</span>
    </div>
    <a href="#" className="mb-3 ">  فراموش کردید؟</a>
    <button  onClick={handelClick} className="mh-100">ورود</button>
    </div>

     </>
  )
}
export default Login

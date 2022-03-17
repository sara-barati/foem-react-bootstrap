import React, { useState, useEffect, useRef } from "react";
import "./Register.css";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";

export default function Register() {
  const [value, setvalue] = useState("");
  let [fetchData, setfetchData] = useState("");
  let [states, setStates] = useState("");
 
  const [icon,seticon]=useState(AiFillEyeInvisible)
  const [type,settype]=useState("password")
  const emailRef = useRef("");

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
  
  const changeHandler = (e) => {
    setvalue(e.target.value);
    console.log(value);
  };
  const handelstate = (e) => {
    setStates(e.target.value);
  };
  const handelClick = () => {
    if (emailRef.current.value !== "" ) {
      alert("با موفقیت وارد شدید");
    }
  };
  const apiData = () => {
    fetch("./iranstates.json")
      .then((res) => res.json())
      .then((response) => setfetchData(response));
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <div className="d-flex flex-column inputs">
        <h3 className="text-center mb-4">  رایگان ثبت نام کنید </h3>
        <div className="name d-flex">
        <input
          type="text"
          placeholder=" نام "
          className="mb-3 w-100"
          required="required"
        />
        <input type="text" placeholder=" نام خانوادگی" className="mb-3 w-100"  required="required" />
        </div>
        <input
          type="email"
          placeholder="پست الکترونیک"
          className="mb-3 "
          ref={emailRef}
          required
        />
        <div className="inputpass mb-3">
        <input
          type={type}
          placeholder="کلمه عبور"
          className="mb-3"
          required
        />
          <span onClick={handleToggle}>{icon}</span>
          </div>
        <select onChange={changeHandler}>
          <option value="" disabled selected>
            تحصیلات
          </option>
          <option value="1">دیپلم</option>
          <option value="2">لیسانس</option>
          <option value="3">فوق لیسانس</option>
          <option value="4">دکتری</option>
        </select>
        {value === "" ? (
          " "
        ) : (
          <input type="text" placeholder="محل تحصیل" className="mt-3" />
        )}
        <div className="fech d-flex mt-3 mb-3">
          <select
            className="ostan"
            onChange={handelstate}
           
            required
          >
            <option value="" disabled selected>
              استان{" "}
            </option>
            {Object.keys(fetchData).map((item, i) => (
              <option key={i}>{item}</option> 
            ))}
          </select>
          <select className="shahr">
          <option value="" disabled selected>
              محل تولد{" "}
            </option>
            {fetchData[states]?.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>
        </div>
        <button
          variant="success"
          type="submit"
          className="lastbtn"
         onClick= {handelClick}
         
        >
          ثبت نام
        </button>
      </div>
    </>
  );
}

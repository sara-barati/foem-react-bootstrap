import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Register from "./Register";
import TabsComponent from "./TabsComponent";

import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [login, setlogin] = useState(true);

  const greenStyle = {
    backgroundColor: "green",
  };
  const grayStyle = {
    backgroundColor: "gray",
  };
  const handleLoginClick = () => {
    setlogin(true);
  };

  const handleSignInClick = () => {
    setlogin(false);
  };

  return (
    <div>
       <div className="button mb-2">
      <button
        className="but-app"
        onClick={handleSignInClick}
        style={login ? grayStyle : greenStyle}
      >
        ثبت نام
      </button>
      <button
        className="but-app"
        style={login ? greenStyle : grayStyle}
        onClick={ handleLoginClick }
      >
        {" "}
        ورود
      </button>
      </div>
      ,<div className="mt-5 form">{login ? <Login /> : <Register />}</div>
    </div>
  );
}

export default App;

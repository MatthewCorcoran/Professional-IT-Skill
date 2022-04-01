import React from "react";
import BaseLogin from "../imports/BaseLogin";
import RegisterFrom from "../imports/RegisterForm";

export default function Login(){
    return(
        <div id= "login">
        <div className = "container">
          <div className = "row login-box">
                <BaseLogin/>
                <RegisterFrom/>
             </div>
            </div>
          </div>
    )
}
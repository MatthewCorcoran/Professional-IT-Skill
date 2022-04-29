import React, { useState } from "react";
import BaseLogin from "../imports/BaseLogin";
import LoginForm from "../imports/LoginForm";
import { useDispatch,useStore} from "react-redux";
import { registerAction } from "../../container/actions";
import { loginAction } from "../../container/actions";
import { useNavigate } from 'react-router-dom';

export default function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
  
    event.preventDefault();

    const userCredential = {
      email,
      password
    }

  
    const login = dispatch(loginAction(userCredential))
      login
        .then(data => navigate('/'))
        .catch(error =>  console.log(error))
      
  }



    return(
        <div id= "login">
        <div className = "container">
          <div className = "row login-box">
                <BaseLogin/>
                <LoginForm loginState ={{handleSubmit,setEmail,setPassword}}/>
             </div>
            </div>
          </div>
    )
}
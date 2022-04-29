import React,{useState} from "react";
import { useDispatch } from "react-redux";
import BaseLogin from "../imports/BaseLogin";
import RegisterFrom from "../imports/RegisterForm";
import { registerAction } from "../../container/actions";
import { useNavigate } from 'react-router-dom';

export default function Register(){

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordCheck,setPasswordCheck] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate();
  // on form submit ckick handler
  const handleSubmit = (event) => {

    event.preventDefault();

    const newUser = {
      username,
      email,
      password,
      passwordCheck
    }

    
    
    const validate = dispatch(registerAction(newUser));
    validate
      .then(data => {
        // console.log(data)
        navigate('/login');
      })
      .catch(error =>  console.log(error))
   

  }

  let registerData = {
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCheck

  }

    return(
        <div id= "login">
        <div className = "container">
          <div className = "row login-box">
                <BaseLogin/>
                <RegisterFrom registerState ={registerData}/>
             </div>
            </div>
          </div>
    )
}
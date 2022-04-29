import React from "react";
import Header from "../imports/Header";
import Services from "../imports/Services";
import { useSelector } from 'react-redux';
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home(){

    const user = useSelector(state => state.isLoggedIn);
    const navigate = useNavigate();

  //  useEffect(() => {
    //    if (!user()){
      //      navigate('/login')
       // }
    //}, [user, navigate])
    

    return(
//HEADER -Navbar
     <>
     <Header></Header>
        <main>
        <div className="container">
            <Services></Services>
        </div>
        </main>
       
        </>

      
    )
}
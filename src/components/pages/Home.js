import React from "react";
import Header from "../imports/Header";
import Services from "../imports/Services";

export default function Home(){
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
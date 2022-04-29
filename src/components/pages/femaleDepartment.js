import React from "react";
import Header from "../imports/Header";
import female from "../imports/female";

export default function femaleDepartment(){
    return(
//HEADER -Navbar
     <>
     <Header></Header>
        <main>
        <div className="container">
            <female></female>
        </div>
        </main>
       
        </>

      
    )
}
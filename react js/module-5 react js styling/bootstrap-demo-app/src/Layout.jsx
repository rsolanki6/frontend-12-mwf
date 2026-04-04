import React from "react";
import Navbar from "./Navbar";
import HeaderApp from "./HeaderApp";
import FooterApp from "./FooterApp";
import ContentApp from "./ContentApp";
export default function Layout()
{

     return (
          <>
               <Navbar />
               <HeaderApp />
               <ContentApp />
               <FooterApp />
          </>
     )
} 
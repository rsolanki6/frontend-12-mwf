import React from "react";
import { Container } from "react-bootstrap";

export default function ContainerApp() {

     return(
          <>
          
          <Container className='bg-success text-white p-4 mt-5'>
               <h1>Container</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          </Container>


          <Container fluid className='bg-success text-white p-4 mt-5'>
               <h1>Container</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          </Container>
          
          </>
     )

}
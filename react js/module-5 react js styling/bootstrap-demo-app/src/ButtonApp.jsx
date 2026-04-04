import React from "react";
import { Container, Row,Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
export default function ButtonApp() {

     return(
          <>
          
          <Container className='bg-success text-white p-4 mt-5'>
               <h1>Container with button and icon</h1>


               <Row className="gap-5">
                    {/* change this col-md-3 add into div */}
                    <div className="col-md-3">
                         <Button className="w-100 p-2 m-3 shadow"> <span className="bi bi-Cart">Alarm</span> </Button>
                    </div>
                    <div className="col-md-3">
                         <Button className="w-100 p-2 m-3 shadow">
                              <i className="bi bi-alarm"></i>
                         </Button>
                    </div>
                    <div className="col-md-3">
                         <Button className="w-100 p-2 m-3 shadow"></Button>
                    </div>
                    <Button className="col-md-3 p-2 m-3 shadow"></Button>
                    <Button className="col-md-3 p-2 m-3 shadow"></Button>
               </Row>


          </Container>

          
          </>
     )

}
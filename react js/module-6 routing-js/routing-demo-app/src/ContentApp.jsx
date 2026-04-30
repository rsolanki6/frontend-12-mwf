import React from 'react'
import { Container,Row } from 'react-bootstrap'

export default function ContentApp() {
  return (
    <Container>
      <Row>
         <div className="container py-5">

      {/* Heading */}
      <h1 className="text-center mb-4">Welcome to MySite</h1>

      {/* Intro */}
      <p className="text-center mb-5">
        This is a simple demo website built using React and Bootstrap.
        You can use this section to display your main content.
      </p>

      {/* Cards Section */}
      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Fast</h5>
              <p className="card-text">
                Our website is optimized for performance and speed.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Responsive</h5>
              <p className="card-text">
                Works perfectly on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Easy to Use</h5>
              <p className="card-text">
                Simple and clean UI for better user experience.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Extra Content */}
      <div className="mt-5">
        <h3>About This Project</h3>
        <p>
          This project is created to practice React, routing, and layout design.
          You can expand this section by adding more features like login system,
          API integration, and database connectivity.
        </p>
      </div>

    </div>
      </Row>
    </Container>
  )
}

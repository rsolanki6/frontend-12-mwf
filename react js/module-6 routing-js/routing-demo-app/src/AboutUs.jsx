import React from 'react'
import Navbar from './Navbar'
import FooterApp from './FooterApp'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function AboutUsApp() {
  return (
    <>
      <Navbar />

      <Container className="py-5">

        {/* Heading */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="fw-bold">About Us</h1>
            <p className="text-muted">
              Learn more about our journey and what we do
            </p>
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="mb-5 text-center">
          <Col md={6} className="mb-4">
            <div className="p-4 shadow-sm border rounded h-100">
              <h4>Our Mission</h4>
              <p>
                To build fast and user-friendly web applications using modern technologies.
              </p>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="p-4 shadow-sm border rounded h-100">
              <h4>Our Vision</h4>
              <p>
                To become skilled developers and work on real-world projects.
              </p>
            </div>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Our Team</h2>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={3} className="mb-4">
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <h5>Tim</h5>
                <p className="text-muted">Frontend Developer</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <h5>John</h5>
                <p className="text-muted">Backend Developer</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <h5>Priya</h5>
                <p className="text-muted">UI/UX Designer</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Technologies */}
        <Row className="mb-5">
          <Col md={8} className="mx-auto text-center">
            <h3 className="fw-bold">Technologies We Use</h3>
            <p className="text-muted">
              React, Bootstrap, JavaScript, PHP, MySQL
            </p>
          </Col>
        </Row>

        {/* Why Choose Us */}
        <Row>
          <Col md={8} className="mx-auto text-center">
            <h3 className="fw-bold">Why Choose Us?</h3>
            <p className="text-muted">
              We focus on clean UI, performance, and user experience to build modern web applications.
            </p>
          </Col>
        </Row>

      </Container>

      <FooterApp />
    </>
  )
}
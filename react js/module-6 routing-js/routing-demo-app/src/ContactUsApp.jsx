import React from 'react'
import Navbar from './Navbar'
import FooterApp from './FooterApp'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function ContactUs() {
  return (
    <div>
      <Navbar />

      <Container className="py-5">

        {/* Heading */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted">
              Feel free to reach out to us anytime
            </p>
          </Col>
        </Row>

        <Row>

          {/* Contact Form */}
          <Col md={6} className="mb-4">
            <Form className="p-4 shadow-sm border rounded">
              
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message" />
              </Form.Group>

              <Button variant="dark" type="submit">
                Send Message
              </Button>

            </Form>
          </Col>

          {/* Contact Info */}
          <Col md={6} className="mb-4">
            <div className="p-4 shadow-sm border rounded h-100">
              <h4>Get in Touch</h4>
              <p className="text-muted">
                You can contact us using the form or through the details below.
              </p>

              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Phone:</strong> +91 12345 67890</p>
              <p><strong>Address:</strong> Rajkot, Gujarat, India</p>
            </div>
          </Col>

        </Row>

      </Container>

      <FooterApp />
    </div>
  )
}
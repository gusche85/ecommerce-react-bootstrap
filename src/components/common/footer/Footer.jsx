import React from 'react';
import { Container, Form, Col, Button, Row } from 'react-bootstrap';


function Footer() {
  return (
    <>
      <Container className='m-4 d-flex flex-column align-items-center p-4 '>
        <h2>Keep updated</h2>
        <p className="text-secondary">Sign up to receive the latest offers and promotions</p>
        <Form className="m-3 align-items-center">
          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">

            <Col sm="10">
              <Form.Control className="text-center" type="email" placeholder="Enter your email address" />
            </Col>
            <Col sm="2">
            <Button as="input" type="submit" id="subscribe" onclick="subscribe()" value="Subscribe" />{' '}
              </Col>
          </Form.Group>
          </Form>
      </Container>
    </>
  )
}

export default Footer;



/**/
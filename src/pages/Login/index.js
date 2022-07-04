import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Login extends Component {
  state = {};
  render() {
    return (
      <section class="fullscreen">
        <div class="fullscreen-child">
          <Container fluid>
            <Row>
              <Col sm={4} className="col-sm-offset-4">
                <Form>
                  <Form.Group>
                    <Form.label>Username</Form.label>
                    <Form.Control
                      type="text"
                      placeholder="Type in your email"
                    ></Form.Control>
                    <Form.label>Username</Form.label>
                    <Form.Control
                      type="password"
                      placeholder="Type in your email"
                    ></Form.Control>
                  </Form.Group>
                  <Button></Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Login;

import React, { Component } from "react";
import Axios from "axios";
import Hero from "../Hero";
import Content from "../Content";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phone: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      disabled: true,
    });

    Axios.post("localhost:8500/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        }
      })
      .catch((err) => {
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="fullName">Full Name:</Form.Label>
              <Form.Control
                id="full-name"
                name="fullName"
                type="text"
                value={this.state.fullName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="phone">Phone:</Form.Label>
              <Form.Control
                id="phone"
                name="phone"
                type="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">E-mail address:</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message:</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="7"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send Message
            </Button>{" "}
            {this.state.emailSent === true && (
              <p className="d-inline success-msg">E-mail sent successfully</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">
                E-mail was not sent successfully
              </p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;

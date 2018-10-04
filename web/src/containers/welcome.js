import React, { Component } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Message from '../components/Message';
import Container from '../components/Container';
import './styles.css';

class Welcome extends Component {
  _onSubmit = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <Container>
        <div className="message_header">
          <Message
            attached
            header='Welcome to our site!'
          />
        </div>
        <Form className='attached fluid segment'>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First Name' placeholder='First Name' type='text' />
            <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' />
          </Form.Group>
          <Form.Input label='Username' placeholder='Username' type='text' />
          <Form.Input label='Password' type='password' />
          <Form.Checkbox inline label='I agree to the terms and conditions' />
          <Button color="blue" onClick={this._onSubmit} primary content='Submit' />
        </Form>
      </Container>
    );
  }
}

export default Welcome;

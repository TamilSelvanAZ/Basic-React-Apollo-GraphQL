import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router';
import gql from 'graphql-tag'
import Button from '../components/Button';
import Form from '../components/Form';
import Container from '../components/Container';
import Segment from '../components/Segment';
import './styles.css';
import Input from '../components/Input';


export const POST_MUTATION = gql`
mutation loginUser($mobileNumber: String!, $password: String!) {
  loginUser(mobileNumber: $mobileNumber, password: $password) {
    id
    token
    name
    email
  }
}
`;

class Home extends React.PureComponent {
  static propTypes = {
    loginMutation: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      password: '',
    };
  }

  changeMobile = (e) => {
    this.setState({ mobileNumber: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  _confirm = async data => {
    console.log('@@@@@@@', data.loginUser.token);
    const token =  data.loginUser.token;
    this._saveUserData(token);
    // this.props.history.push("/welcome");
    this.props.history.push("/userList");
  }

  _saveUserData = token => {
    localStorage.setItem('AUTH_TOKEN', token);
  }

  render() {
    return (
      <Container text>
        <Segment className="form_container">
          <Form>
            <Form.Group>
              <Form.Field required>
                <label>Mobile Number</label>
                <Input onChange={this.changeMobile} className="label_width" type="text" placeholder='E-Mail Address' />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field required>
                <label>Password</label>
                <Input onChange={this.changePassword} className="label_width" type="password" placeholder='Password' />
              </Form.Field>
            </Form.Group>
            <Mutation 
            mutation={POST_MUTATION} 
            variables={{ mobileNumber: this.state.mobileNumber, password: this.state.password }}
            onCompleted={data => this._confirm(data)}>
              {postMutation => <Button onClick={postMutation}>Submit</Button>}
            </Mutation>
          </Form>
        </Segment>
      </Container >
    );
  }
}

export default withRouter(Home);
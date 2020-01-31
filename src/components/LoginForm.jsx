/**
 * title: LoginForm.js
 *
 * date: / /
 *
 * author: javier olaya
 *
 * description: component to hold the picture
 */

import React from 'react';
import { returnStatement } from '@babel/types';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: 'password',
      token: ''
    };
  }

  componentDidMount = () => {
    const token = sessionStorage.getItem('jwtToken');
    console.log('token', token);
    if (!token || token === '') return;
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
      // "body": JSON.stringify(data)
    };
    console.log('options', options);
    const url = 'http://localhost:8000';
    this.myFetch(url, options, this.handleLoginReAuthentication);
  };

  onUsernameChange = e => {
    e.preventDefault();
    console.log('onUsernameChange');
  };

  onPasswordChange = e => {
    e.preventDefault();
    console.log('onPasswordChange');
  };

  validation = e => {};

  submitCredentials = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const data = { username: username, password: password };
    console.log('submiting credentials');
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(data)
    };
    const url = 'http://localhost:8000/login';
    this.myFetch(url, options, this.handleLoginSuccessFailure);
  };

  myFetch = async (url, options, callback) => {
    console.log('myFetch');
    await fetch(url, options)
      .then(response => {
        // console.log("response", response);
        return response.json();
      })
      .then(json => {
        callback(json);
        // this.setState()
      })
      .catch(error => {
        console.log('current Error:', error);
      });
  };

  handleLoginSuccessFailure = json => {
    const { success, token, messsage } = json;
    console.log('successful json:', json);
    if (success) {
      this.succussfulLogin(token);
    } else {
      this.unsuccesfulLogin(messsage);
    }
  };

  handleLoginReAuthentication = json => {
    const { success, token, messsage } = json;
    if (success) {
      // this.succussfulLogin(token);
      console.log('you are currently logged in');
    } else {
      // this.unsuccesfulLogin(messsage)
      alert('please log in');
    }
  };

  succussfulLogin = token => {
    this.setSession(token);
  };

  unsuccesfulLogin = messsage => {
    console.log('unsuccessful login:', messsage);
  };

  setSession = token => {
    sessionStorage.setItem('jwtToken', token);
    this.setState(() => ({ token: token }));
  };

  logout = () => {
    sessionStorage.removeItem('jwtToken');
  };

  render() {
    const {
      submitCredentials,
      onUsernameChange,
      onPasswordChange,
      logout
    } = this;
    const { username, password } = this.state;
    return (
      <form onSubmit={submitCredentials}>
        <label>
          <input type="text" onChange={onUsernameChange} value={username} />
        </label>
        <label>
          <input type="text" onChange={onPasswordChange} value={password} />
        </label>
        <input type="submit" value="submit"></input>
        <input type="button" value="logout" onClick={logout} />
      </form>
    );
  }
}

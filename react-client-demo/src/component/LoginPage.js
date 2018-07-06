import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';
import 'whatwg-fetch';

class LoginPage extends Component {
  constructor(){
    super()
    //this.props.dispatch(userActions.logout());
    this.state = {username:"",
                  password:"",
                  submitted:false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({ [e.target.name] : e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({submitted:true});
    //const {dispatch} = this.props;
  }
  render() {
    return (
      <div >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">social-media project by React </h1>
        </header>
        <div className="col-md-6 col-md-offset-3">
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
              <div >
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                  {this.state.submitted && !this.state.username &&
                      <div >Username is required</div>
                  }
              </div>
              <div >
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                  {this.state.submitted && !this.state.password &&
                      <div >Password is required</div>
                  }
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Login</button>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;

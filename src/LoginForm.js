import React, { Component } from "react";
import Card from "./Card";
import Input from "./Input";
import formStyle from "./css/form.module.css";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this._user = React.createRef();
    this._password = React.createRef();
    this.button = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.user = this._user.current.getInput();
    this.password = this._password.current.getInput();
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(`Usuario:${this.user.value}\nPassword:${this.password.value}`);
  }
  render() {
    return (
      <Card color={this.props.color} cardTitle="Login">
        <form onSubmit={this.handleSubmit} className={formStyle.formbody}>
          <Input
            color={this.props.color}
            type="text"
            text="Usuario"
            ref={this._user}
          />
          <Input
            color={this.props.color}
            type="password"
            text="Password"
            ref={this._password}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1em",
              marginRight: '3em'
            }}
          >
            <button
              style={{ backgroundColor: this.props.color }}
              type="submit"
              className={formStyle.button}
              ref={this.button}
            >
              Entrar
            </button>
          </div>
        </form>
      </Card>
    );
  }
}

export default LoginForm;

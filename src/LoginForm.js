import React, { Component } from "react";
import Card from "./Card";
import Input from "./Input";
import formStyle from './css/form.module.css'

export class LoginForm extends Component {
  render() {
    return (
      <Card cardTitle="Login">
        <form className={formStyle.formbody}>
          <Input type="text" text="Usuario" />
          <Input type="password" text="Password" />
          <div style={{display:'flex',justifyContent:'center',marginTop:'1em'}}>
              <button type='submit' className={formStyle.button}>Enviar</button>
          </div>
        </form>
      </Card>
    );
  }
}

export default LoginForm;

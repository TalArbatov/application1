import React from "react";
import d from "./Contact.css";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { compileFunction } from "vm";
import axios from 'axios';
const qs = require('qs');

class Contact extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    },
    formSent: 'none'
  };

  formOnChange = (type, e) => {
    const form = this.state.form;
    form[type] = e.target.value;
    this.setState({form});
    console.log(this.state);
  };
  submitForm = () => {

      axios.post('contact.php', qs.stringify(this.state.form)).then(res => {
        this.setState({formSent: 'success'})
      }).catch(err => {
          this.setState({formSent: 'error'})
      })
  }

  render() {
    let message = <p></p>
    if(this.state.formSent === 'success')
        message = <p style={{color:'green'}}>Message sent successfully!</p>
    else if(this.state.formSent === 'error')
        message = <p style={{color:'red'}}>A problem occurred!</p>

    return (
      <div className={d.container}>
        <div className={d.wallFlex}>
          <div className={d.wall} />
          <form method="POST" action="contact.php" className={d.form}>
            <p className={d.title}>Contact Me</p>

            <TextField
              className={d.input}
              id="standard-name"
              label="First Name"
              margin="normal"
              name="firstName"
              onChange={this.formOnChange.bind(this, 'firstName')}
            />
            <TextField
              className={d.input}
              id="standard-uncontrolled"
              label="Last Name"
              margin="normal"
              name="lastName"
              onChange={this.formOnChange.bind(this, 'lastName')}
            />
            <TextField
              type="email"
              name="email"
              autoComplete="email"
              className={d.input2}
              id="standard-uncontrolled"
              label="Email"
              margin="normal"
              onChange={this.formOnChange.bind(this, 'email')}
            />
            <TextField
              id="standard-textarea"
              label="Message"
              multiline
              rowsMax="10"
              className={d.input3}
              margin="normal"
              variant="outlined"
              name="message"
              onChange={this.formOnChange.bind(this, 'message')}
            />

            <Button
              variant="contained"
              color="primary"
              className={d.submit}
              onClick={this.submitForm}
            >
              Submit
            </Button>
            {message}
          </form>
          <div className={d.wall} />
        </div>
      </div>
    );
  }
}

export default Contact;

import React from 'react';
import d from './Contact.css';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const Contact = () => {
    return (
        <div className={d.container}>
            <div className={d.wallFlex}>
                <div className={d.wall}></div>
                <div className={d.form}>
                    <p className={d.title}>Contact Me</p>

                    <TextField
                        className={d.input}
                        id="standard-name"
                        label="First Name"
                        margin="normal"
                    />
                    <TextField
                        className={d.input}
                        id="standard-uncontrolled"
                        label="Last Name"
                        margin="normal"
                    />
                    <TextField
                        type="email"
                        name="email"
                        autoComplete="email"
                        className={d.input2}
                        id="standard-uncontrolled"
                        label="Email"
                        margin="normal"
                    />
                    <TextField
                        id="standard-textarea"
                        label="Message"
                        multiline
                        rowsMax="10"
                        className={d.input3}
                        margin="normal"
                        variant="outlined"
                    />

                    <Button variant="contained" color="primary" className={d.submit}>
                        Submit
      </Button>

                </div>
                <div className={d.wall}></div>
            </div>

        </div>
    );
};

export default Contact;
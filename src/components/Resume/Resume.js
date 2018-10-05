import d from './Resume.css';
import axios from 'axios';
import React, { Component } from 'react';



export default class Resume extends Component {

    download = (e) => {
        console.log('downloading...');
        console.log(e);
        e.preventDefault();
        window.location.href = './download.php';
        //axios.get('download.php').then(res => {});
    }


    render() {
        return (
            <div className={d.banner}>
                <p>My resume</p>
                <p>I provided my resume below</p>
                <div><button className={d.downloadButton} onClick={this.download}>download</button></div>
                {/* <form method="POST" action="./learn.php">
                <table>
                    <tr>
                        <td>Name: </td>
                        <td><input type='text' name='name' /></td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td><input type='text' name='email' /></td>
                    </tr>
                </table>
                <input type='submit' value="Submit" />
            </form> */}
            </div>

        );
    }
}

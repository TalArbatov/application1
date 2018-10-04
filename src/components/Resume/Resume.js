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
                <p>Lorem Iposum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

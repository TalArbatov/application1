import d from './Resume.css';
import axios from 'axios';
import React, { Component } from 'react';
import Hexagon from './Hexagon/Hexagon';

import bolt from '../../images/values/bolt.svg';
import elegant from '../../images/values/elegant.svg';
import fast from '../../images/values/fast.svg';
import intuitive from '../../images/values/intuitive.svg';
import responsive from '../../images/values/responsive.svg';
import secure from '../../images/values/secure.svg';


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
                {/* <p>My resume</p> */}
                {/* <p>Right now, I am looking for new and exciting opportunities, so feel free to reach me! I'm free for freelance work and collaborations. In case you're looking for my resume, I provided the PDF below.</p> */}
                {/* <p>I'm a 20-year-old web & mobile application developer with a great passion for my work, and currently finishing my mandatory service in the army.

</p>
                <br />
                <p>My resume:</p>
                <div><button className={d.downloadButton} onClick={this.download}>download PDF</button></div> */}

                <div className={d.flexHexagon}>
                    <Hexagon icon={fast} text='Lag free and fast load times.' title='FAST'/>
                    <Hexagon icon={elegant} text='Beautiful and clean design with a minimalistic style.' title='ELEGANT'/>
                    <Hexagon icon={bolt} text="Immersive design filled with functionality." title='DYNAMIC'/>
                    <Hexagon icon={intuitive} text='Accessive and easy to use UX.' title="INTUITIVE"/>
                    <Hexagon icon={responsive} text='Flexible design that fits on any device.' title='RESPONSIVE'/>
                    <Hexagon icon={secure} text='Reliable software and protection technology.' title="SECURE"/>
                </div>



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

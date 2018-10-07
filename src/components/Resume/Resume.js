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

import { withNamespaces, NamespacesConsumer, Trans } from "react-i18next";

 class Resume extends Component {

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

                {/* <div className={d.flexHexagon}>
                    <Hexagon icon={fast} text={<Trans i18nKey="Values.fast.description" />} title={<Trans i18nKey="Values.fast.title" />}/>
                    <Hexagon icon={elegant} text='Beautiful and clean design with a minimalistic style.' title='ELEGANT'/>
                    <Hexagon icon={bolt} text="Immersive design filled with functionality." title='DYNAMIC'/>
                    <Hexagon icon={intuitive} text='Accessive and easy to use UX.' title="INTUITIVE"/>
                    <Hexagon icon={responsive} text='Flexible design that fits on any device.' title='RESPONSIVE'/>
                    <Hexagon icon={secure} text='Reliable software and protection technology.' title="SECURE"/>
                </div> */}
                 <div className={d.flexHexagon}>
                    <Hexagon icon={fast} text={<Trans i18nKey="Values.fast.description" />} title={<Trans i18nKey="Values.fast.title" />}/>
                    <Hexagon icon={elegant} text={<Trans i18nKey="Values.elegant.description" />} title={<Trans i18nKey="Values.elegant.title" />}/>
            <Hexagon icon={bolt} text={<Trans i18nKey="Values.dynamic.description" />} title={<Trans i18nKey="Values.dynamic.title" />}/>
                    <Hexagon icon={intuitive} text={<Trans i18nKey="Values.intuitive.description" />} title={<Trans i18nKey="Values.intuitive.title" />}/>
            <Hexagon icon={responsive} text={<Trans i18nKey="Values.responsive.description" />} title={<Trans i18nKey="Values.responsive.title" />}/>
            <Hexagon icon={secure} text={<Trans i18nKey="Values.secure.description" />} title={<Trans i18nKey="Values.secure.title" />}/>
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
export default withNamespaces("translation")(Resume)
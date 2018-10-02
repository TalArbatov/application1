import d from './Hero.css';
import Typed from 'typed.js';
import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

const options = {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 40
}




export default class Hero extends Component {

    componentDidMount() {
        // const typed = new Typed(".element", options);

    }

    render() {
        return (
               

                <div className={d.Background}>
                    {/* <p className="element"></p> */}

                </div>


        );
    }
}


/**
 * 
 * 
 * 




 */
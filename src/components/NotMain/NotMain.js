import React, { Component } from 'react';

export default class NotMaom extends Component {

    authenticate() {
        return new Promise(resolve => setTimeout(resolve, 500))
    }

    componentDidMount() {
        this.authenticate().then(() => {
            const ele = document.getElementById('ipl-progress-indicator')
            if (ele) {
                // fade out
                ele.classList.add('available')
                setTimeout(() => {
                    // remove from DOM
                    ele.outerHTML = ''
                }, 0)
            }
        })
    }

    render() {
        return (
            <h1>NOT MAIN</h1>
        );
    }
}
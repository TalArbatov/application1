import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';

//redux


ReactDOM.render(
<ParallaxProvider style={{margin:0, padding:0}}>
    <App />
</ParallaxProvider>
    , document.getElementById('root'));
registerServiceWorker();

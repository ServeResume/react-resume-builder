import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'normalize.css/normalize.css';
import App from './App';

WebFont.load({
  google: {
    families: ['Open+Sans:400,600,700'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

/*---------------------------
| IE 11 Support
---------------------------*/
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

/*---------------------------
| React and 3rd Party Libraries
---------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';

/*---------------------------
| Components
---------------------------*/
import SunAndMoon from './React/SunAndMoon.jsx';

/*---------------------------
| Render to DOM
---------------------------*/
ReactDOM.render(<SunAndMoon />, document.getElementById('root'));
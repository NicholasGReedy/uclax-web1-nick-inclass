import React from 'react';

/* Components ---------------------------*/
import Slideshow from './Slideshow.jsx';
import Staff from './Staff.jsx';
import Tabbed from './Tabbed.jsx';


const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Slideshow />
            <Tabbed />
            <Staff />
        </div>
    );
}

export default Welcome;
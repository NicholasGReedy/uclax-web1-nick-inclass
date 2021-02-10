import React from 'react';

/* Components ---------------------------*/
// import Slideshow from './Slideshow.jsx';
import Staff from './Staff.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';


const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>
            {/* <Slideshow /> */}
            <div className="nested">
            <Tabbed />
            </div>
            <Staff />
        </div>
    );
}

export default Welcome;
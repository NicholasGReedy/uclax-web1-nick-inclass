import React, { useState } from 'react';

/* Script ---------------------------*/
import { services } from './servicesData.js';

/* Components ---------------------------*/
import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx';

const Services = () => {

const [catChosen, catChosenUpdate] = useState('All');

console.log('catChosen', catChosen);

    return (
        <div>
            <h1>Services</h1>
            <FilterNav services={ services } catChosen={ catChosen } catChosenUpdate={ catChosenUpdate} />
            <Gallery services={ services } catChosen={ catChosen } />
        </div>
    );
}

export default Services;
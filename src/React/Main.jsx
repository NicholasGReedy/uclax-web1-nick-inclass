import React from 'react';
import { Switch, Route } from 'react-router-dom'

/* Components --------------------*/
import Welcome from './Pages/Welcome/Welcome.jsx';
import Services from './Pages/Services/Services.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Login from './Pages/Login/Login.jsx';

const Main = () => {
    return(
        <main>
            <Switch>
                <Route path='/services' component={ Services } />
                <Route path='/contact' component={ Contact } />
                <Route path='/login' component={ Login } />
                <Route path='/' component={ Welcome } exact />
            </Switch>
        </main>
    )
}

export default Main;
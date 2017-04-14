import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
    Welcome,
    OurMacarons,
    GiftsParties,
    Contact
} from './components';

const Routes = () => (
    <div>
        <Redirect exact from='/' to='/welcome'/>
        <Route exact path="/welcome" component={ Welcome } />
        <Route path="/our_macarons" component={ OurMacarons } />
        <Route path="/gifts_parties" component={ GiftsParties } />
        <Route path="/contact" component={ Contact } />
    </div>
)

export default Routes;

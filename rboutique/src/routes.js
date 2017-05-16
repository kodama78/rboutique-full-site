import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
    Welcome,
    OurMacarons,
    GiftsParties,
    Contact
} from './components';

const Routes = () => (
    <div>
        <Switch> {/*Switch is used to EXCLUSIVELY render the first route that matches the location path*/}
            <Redirect exact from='/' to='/welcome'/>
            {/*this will "redirect" the url (update the url location path, then triger the route associated with that path)*/}
            <Route exact path="/welcome" component={ Welcome } />
            {/*Route renders whatever component is provided to it when the given path is hit in the url*/}
            <Route path="/our_macarons" component={ OurMacarons } />
            <Route path="/gifts_parties" component={ GiftsParties } />
            <Route path="/contact" component={ Contact } />
        </Switch>
    </div>
)

export default Routes;

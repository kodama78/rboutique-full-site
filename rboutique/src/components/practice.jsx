import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';

<BrowserRouter> // BrowserRouter is wrapped around the highest level parent of you application
    <Template> // Template contains the header and footer of our app and wraps all other components
        <Routes />  // Routes component is used here to display child components
    </Template>
</BrowserRouter>

//Routes Component
// Switch is used to EXCLUSIVELY render the first route that matches the location path
<Switch>
<Route path="/welcome" component={ Welcome } />
    <Route path="/our_macarons" component={ OurMacarons } />
    <Route path="/gifts_parties" component={ GiftsParties } />
    <Route path="/contact" component={ Contact } />
</Switch>

// These routes will both be displayed, since they the URL matches both of them
    <div>
    <Route path="/welcome" component={ Welcome } />
    <Route path="/:random" component={ OurMacarons } />
    </div>

    <Redirect exact from='/' to='/welcome'/> // this will "redirect" the url (update the url location path, then triger the route associated with that path)

    <Route // Route renders whatever component is provided to it when the given path is hit in the url
// Path
path="/welcome" // this is the location path you want to display with the provided component

//Component OR Render
// You can use component or render, they have different affects

// The component will mount when the path is met, and it will REMOUNT when when there
// are changes, because everytime the route is hit, it creates a new React element with that component
component={ Welcome }

// the render method allows a component to be rendered inline as a function instead of mounting a new component
render={() => <Welcome />}
/>

<Link to="/welcome">Welcome</Link> // Link updates the URL to the provided path name, whcih then triggers the route associated with that path name


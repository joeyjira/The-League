import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import Header from "./header/header";
import HomePage from "./homepage/homepage.jsx"

class App extends React.Component {
    render() {
        return(
            <div className="app-container">
                <HeaderContainer />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </div>
        )
    }
}

export default App;
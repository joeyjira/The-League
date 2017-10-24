import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import Header from "./header/header";
import HomePageContainer from "./homepage/homepage_container"

class App extends React.Component {
    render() {
        return(
            <div className="app-container">
                <HeaderContainer />
                <Switch>
                    <Route exact path='/' component={HomePageContainer} />
                </Switch>
            </div>
        )
    }
}

export default App;
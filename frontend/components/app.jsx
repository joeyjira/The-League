import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HeaderContainer from "./header/header_container";
import Header from "./header/header";
import MatchOfTheDayContainer from "./matches/match_of_the_day";

class App extends React.Component {
    render() {
        return(
            <div className="app-container">
                <HeaderContainer />
                {/* <Switch>
                    {<Route exact path='/' component={Homepage} />}
                </Switch> */}
            </div>
        )
    }
}

export default App;
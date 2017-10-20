import React from 'react';
import Login from '../buttons/login';
import SignUp from '../buttons/signup';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                <h1>SMASH-UP</h1>

            </div>
        )
    }
}

export default Header;
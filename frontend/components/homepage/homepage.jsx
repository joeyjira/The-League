import React from "react";

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="landing-section">
                <div className="match-of-the-day">
                    match-of-the-day
                </div>
                <div className="rankings">
                    <div className="nba-ranking">
                        nba-ranking
                    </div>
                    <div className="player-ranking">
                        player-ranking
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
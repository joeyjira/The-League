import React from "react";
import NBARankingContainer from '../ranking/nba_ranking_container';

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
                        <NBARankingContainer />
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
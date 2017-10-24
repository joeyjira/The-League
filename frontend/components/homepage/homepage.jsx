import React from "react";
import NBARankings from '../ranking/nba_rankings';
import PlayerRankings from '../ranking/player_rankings';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchStandings();
    }

    render() {
        const { standings } = this.props;
        return(
            <div className="landing-section">
                <div className="match-of-the-day">
                    match-of-the-day
                </div>
                <div className="rankings">
                    <div className="nba-ranking">
                        <NBARankings 
                            standings={standings}
                        />
                    </div>
                    <div className="player-ranking">
                        <PlayerRankings 
                            standings={standings}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
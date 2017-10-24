import React from "react";
import NBARankings from '../ranking/nba_rankings';

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
                        player-ranking
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
import React from 'react';
import TeamRank from './team_rank';

class NBARankings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { standings } = this.props;
        const eastRank = standings.east.map(team =>
            <TeamRank
                key={team.teamId}
                teamId={team.teamId}
                wins={team.win}
                losses={team.loss}
                winPct={team.winPct}
            />
        );
        const westRank = standings.west.map(team =>
            <TeamRank
                key={team.teamId}
                teamId={team.teamId}
                wins={team.win}
                losses={team.loss}
                winPct={team.winPct}
            />
        );
        return(
            <div className="conference-ranking">
                <div className="eastern-conference">
                    {eastRank.length > 0 ? eastRank : ""}
                </div>
                <div className="western-conference">
                    {westRank.length > 0 ? westRank : ""}
                </div>
            </div>
        )
    }
}

export default NBARankings;
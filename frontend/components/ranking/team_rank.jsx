import React from 'react';
import { NBATEAMS } from '../../util/nba_teams';

class TeamRank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        function getTeamName(teamId) {
            for (let i = 0; i < NBATEAMS.length; i++) {
                if (teamId === NBATEAMS[i].teamId) {
                    return NBATEAMS[i].fullName
                }
            }
        }
        const { teamId, wins, losses, winPct } = this.props
        const teamName = getTeamName(teamId);

        return(
            <div>
                { teamName } Wins: { wins } Losses: { losses }
            </div>
        )
    }
}

export default TeamRank;
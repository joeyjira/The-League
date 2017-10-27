import React from 'react';
import UserRank from './user_rank';

import { USERDRAFT } from '../../util/user_draft';

class UserRankings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { standings } = this.props;

        function getUserStandings() {
            let userStandings = [];
            let eastScore = 0;
            let westScore = 0;
            let eastCorrect = [];
            let westCorrect = [];
            if (standings.east.length !== 0) {
                for (let i = 0; i < USERDRAFT.length; i++) {
                    for (let j = 0; j < USERDRAFT[i].RANK.EAST.length; j++) {
                        if (USERDRAFT[i].RANK.EAST[j] === standings.east[j].teamId) {
                            eastScore++;
                            eastCorrect.push(USERDRAFT[i].RANK.EAST[j]);
                        }
                    }
                    for (let j = 0; j < USERDRAFT[i].RANK.WEST.length; j++) {
                        if (USERDRAFT[i].RANK.WEST[j] === standings.west[j].teamId) {
                            westScore++;
                            westCorrect.push(USERDRAFT[i].RANK.WEST[j]);
                        }
                    }
                    userStandings.push({
                        name: USERDRAFT[i].NAME,
                        eastPoints: eastScore,
                        westPoints: westScore,
                        totalScore: eastScore + westScore
                    })
                    eastScore = 0;
                    westScore = 0;
                }
            }
            return userStandings.sort((a, b) => {
                return b.totalScore - a.totalScore
            })
        }

        const userStandings = getUserStandings();

        const userRank = userStandings.map(user =>
            <UserRank 
                key={user.name}
                name={user.name}
                total={user.totalScore}
                west={user.westPoints}
                east={user.eastPoints}
            />
        );

        return (
            <div className="conference-ranking">
                <div className="user-rankings">
                    {userRank}
                </div>
            </div>
        )
    }
}

export default UserRankings;
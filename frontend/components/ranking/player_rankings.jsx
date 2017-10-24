import React from 'react';
import PlayerRank from './player_rank';

import { PLAYERDRAFT } from '../../util/player_draft';

class PlayerRankings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { standings } = this.props;

        function getPlayerStandings() {
            let playerStandings = [];
            let eastScore = 0;
            let westScore = 0;
            if (standings.east.length !== 0) {
                for (let i = 0; i < PLAYERDRAFT.length; i++) {
                    for (let j = 0; j < PLAYERDRAFT[i].RANK.EAST.length; j++) {
                        if (PLAYERDRAFT[i].RANK.EAST[j] === standings.east[j].teamId) {
                            eastScore++;
                        }
                    }
                    for (let j = 0; j < PLAYERDRAFT[i].RANK.WEST.length; j++) {
                        if (PLAYERDRAFT[i].RANK.WEST[j] === standings.west[j].teamId) {
                            westScore++;
                        }
                    }
                    playerStandings.push({
                        name: PLAYERDRAFT[i].NAME,
                        eastPoints: eastScore,
                        westPoints: westScore,
                        totalScore: eastScore + westScore
                    })
                    eastScore = 0;
                    westScore = 0;
                }
            }
            return playerStandings;
        }

        const playerStandings = getPlayerStandings();
        console.log(playerStandings)
        // const playerRank = PLAYERDRAFT.map(player =>
        //     <PlayerRank 
        //         key={player.NAME}
        //         name={player.NAME}
        //         rank={player.RANK}
        //         west={standings.west}
        //         east={standings.east}
        //     />
        // );

        return (
            <div className="conference-ranking">
                <div className="player-rank">

                </div>
            </div>
        )
    }
}

export default PlayerRankings;
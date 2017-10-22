import * as APIUtil from "../util/nba_api_util";

export const RECEIVE_STANDINGS = "RECEIVE_STANDINGS";

export const receiveStandings = standings => ({
    type: RECEIVE_STANDINGS,
    standings
});

export const fetchStandings = () => dispatch => 
    APIUtil.getStandings().then(standings =>
        dispatch(receiveStandings(standings))
    );
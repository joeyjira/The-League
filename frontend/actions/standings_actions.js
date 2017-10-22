import * as APIUtil from "../util/nba_api_util";

export const RECEIVE_STANDINGS = "RECEIVE_STANDINGS";

export const receiveCurrentUser = standings => ({
    type: RECEIVE_STANDINGS,
    standings
});
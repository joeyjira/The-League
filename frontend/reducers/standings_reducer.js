import merge from "lodash/merge";

import {
    RECEIVE_STANDINGS
} from "../actions/standings_actions";

const nullStandings = Object.freeze({
    east: [],
    west: []
});

const standingsReducer = (state = nullStandings, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STANDINGS:
        const standings = action.standings;
        return merge({}, nullStandings, action.standings)
    }
}
import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import StandingsReducer from "./standings_reducer";

const RootReducer = combineReducers({
    session: SessionReducer,
    standings: StandingsReducer
})

export default RootReducer;
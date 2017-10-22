import { connect } from 'react-redux';
import NBARanking from './nba_ranking';

import { fetchStandings } from '../../actions/standings_actions';

const mapStateToProps = (state) => ({
    standings: state.standings
});

const mapDispatchToProps = dispatch => ({
    fetchStandings: () => dispatch(fetchStandings())
});

const NBARankingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NBARanking);

export default NBARankingContainer;
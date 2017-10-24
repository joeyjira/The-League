import { connect } from 'react-redux';
import HomePage from './homepage';

import { fetchStandings } from '../../actions/standings_actions';

const mapStateToProps = (state) => ({
    standings: state.standings
});

const mapDispatchToProps = dispatch => ({
    fetchStandings: () => dispatch(fetchStandings())
});

const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export default HomePageContainer;
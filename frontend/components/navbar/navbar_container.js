import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { searchUsers } from '../../actions/search_actions';
import NavBar from './navbar';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  searchUsers: (data) => dispatch(searchUsers(data))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

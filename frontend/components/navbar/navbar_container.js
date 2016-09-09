import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { searchUsers } from '../../actions/user_actions';
import NavBar from './navbar';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  searchUsers: (data) => dispatch(searchUsers(data))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

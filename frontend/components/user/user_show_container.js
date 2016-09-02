import { connect }  from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import UserShow  from './user_show';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

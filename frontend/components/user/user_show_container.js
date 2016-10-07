import { connect }  from 'react-redux';
import { requestUser, Follow, unFollow } from '../../actions/user_actions';
import { removeCommentAction } from '../../actions/photo_actions';
import { requestCurrentUser } from '../../actions/session_actions';
import UserShow  from './user_show';

const mapStateToProps = state => ({
  photos: state.photos,
  currentUser: state.session.currentUser,
  currentUser_following: state.session.currentUser.following.map(follow => follow['followee_id']),
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  requestCurrentUser: user => dispatch(requestCurrentUser(user)),
  requestUser: id => dispatch(requestUser(id)),
  removeCommentAction: id => dispatch(removeCommentAction(id)),
  unFollow: id => dispatch(unFollow(id)),
  Follow: id => dispatch(Follow(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

import { connect }  from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { removeCommentAction } from '../../actions/photo_actions';
import UserShow  from './user_show';

const mapStateToProps = state => ({
  users: state.users,
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  removeCommentAction: id => dispatch(removeCommentAction(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

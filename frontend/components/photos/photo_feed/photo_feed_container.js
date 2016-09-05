import { connect }  from 'react-redux';
import PhotoFeed  from './photo_feed';
import { requestPhotos, requestPhoto, removeCommentAction } from '../../../actions/photo_actions';
import { receiveCurrentUser } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  photos: state.photos,
  currentUser: state.session.currentUser
});
const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
  requestPhoto: id => dispatch(requestPhoto(id)),
  removeCommentAction: id => dispatch(removeCommentAction(id)),
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);

import { connect }  from 'react-redux';
import PhotoFeed  from './photo_feed';
import { requestPhotos, requestPhoto, removeCommentAction } from '../../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: state.photos
});
const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
  requestPhoto: (id) => dispatch(requestPhoto(id)),
  removeCommentAction: (id) => dispatch(removeCommentAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);

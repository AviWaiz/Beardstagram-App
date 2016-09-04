import { connect }  from 'react-redux';
import PhotoIndex  from './photo_index';
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
)(PhotoIndex);

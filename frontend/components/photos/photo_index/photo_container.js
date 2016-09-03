import { connect }  from 'react-redux';
import PhotoIndex  from './photo_index';
import { requestPhotos, requestPhoto, removeComment } from '../../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: state.photos
});
const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
  requestPhoto: (id) => dispatch(requestPhoto(id)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);

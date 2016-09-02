import { connect }  from 'react-redux';
import PhotoIndex  from './photo_index';
import { requestPhotos } from '../../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: state.photos
});
const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);

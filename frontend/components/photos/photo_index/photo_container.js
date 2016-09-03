import { connect }  from 'react-redux';
import PhotoIndex  from './photo_index';
import { requestPhotos, requestPhoto } from '../../../actions/photo_actions';

const mapStateToProps = state => {
  
  return(
    {photos: state.photos}
  )
};
const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos()),
  requestPhoto: (id) => dispatch(requestPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);

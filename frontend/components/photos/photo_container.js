import { connect }  from 'react-redux';
import PhotoIndex  from './photo_index';

const mapStateToProps = state => ({
  photos: state.photos
});

export default connect(
  mapStateToProps
)(PhotoIndex);

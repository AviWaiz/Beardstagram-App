import { connect }  from 'react-redux';
import PhotoForm  from './photo_form';
import { createPhoto } from '../../../actions/photo_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});
const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);

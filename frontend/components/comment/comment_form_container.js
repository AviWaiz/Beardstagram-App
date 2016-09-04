import { connect }  from 'react-redux';
import CommentForm  from './comment_form';
import { createComment } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

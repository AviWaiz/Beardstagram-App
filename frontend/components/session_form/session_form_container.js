import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logIn, logOut, signUp } from '../../actions/session_actions';
import { Follow } from '../../actions/user_actions';


const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? logIn : signUp;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    Follow: id => dispatch(Follow(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

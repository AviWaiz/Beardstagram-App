import React  from 'react';
import { withRouter, hashHistory } from 'react-router';
import Modal from 'react-modal';
import {ModalStyle} from '../../../util/modal_style';

class PhotoForm extends React.Component{
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
    this.state = {
      title: '',
      user_id: this.props.currentUser.id,
      url: '',
      modalOpen: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
		this.redirectToIntro = this.redirectToIntro.bind(this);

  }
  onModalClose() {
	  this.setState({modalOpen: false});
		this.redirectToIntro();
	}

	redirectToIntro() {
	  hashHistory.push('/');
	}
  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        console.log(results[0]);
        this.setState({url: results[0].url});
      }
    });
  }
  update(property){
    return e => this.setState({[property]: e.target.value});
  }
  navigateToIndex() {
    this.props.router.push("/");
  }

  handleSubmit(e){
    e.preventDefault();
    const photo = Object.assign({}, {title: this.state.title,
                                     userId: this.state.user_id,
                                     url: this.state.url});
    this.props.createPhoto(photo);
    this.navigateToIndex();
  }
  render(){
    let image;
    if (this.state.url) {
      image = <img src={this.state.url} width="100" height="100" />
    }

    return (
      <div >
      <Modal isOpen={this.state.modalOpen}
						 onRequestClose={this.onModalClose}
						 style={ModalStyle}>
      <form onSubmit={this.handleSubmit}
            className="photo-form-box">
        <h3 className="new-photo-title">Add a Beard</h3>
        <button className="upload-button"
                onClick={this.upload}>
                <i className="material-icons">backup</i>
        </button>
        <div>
          {image}
        </div>

        <label className="photo-field">title</label>
           <input type="text" value={this.state.title}
             onChange={this.update("title")} className="photo-field"/>
           <div className="button-holder">
             <input className="demo" type="submit" value="Create Photo"/>
           </div>
        </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(PhotoForm);

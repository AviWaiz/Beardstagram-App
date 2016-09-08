import React  from 'react';
import { withRouter, hashHistory } from 'react-router';
import Modal from 'react-modal';
import { ModalStyle2 } from '../../../util/modal_style';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";
import PhotoEdit from './photo_edit';

class PhotoForm extends React.Component{
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
    this.state = {
      title: '',
      user_id: this.props.currentUser.user.id,
      url: '',
      modalOpen: true,
      x: '',
      y: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
		this.redirectToIntro = this.redirectToIntro.bind(this);
		this.beardPosition = this.beardPosition.bind(this);
  }
  onModalClose() {
	  this.setState({modalOpen: false})
		this.redirectToIntro()
	}

	redirectToIntro() {
	  hashHistory.push('/photos')
	}
  beardPosition(x, y) {
    this.setState({x: x, y: y})
  }
  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.setState({url: results[0].url});
      }
    });
  }
  update(property){
    return e => this.setState({[property]: e.target.value});
  }
  navigateToIndex() {
    this.props.router.push("/photos");
  }

  handleSubmit(e){
    e.preventDefault();
    const photo = {title: this.state.title,
                  user_id: this.state.user_id,
                  url: this.state.url,
                  x: this.state.x,
                  y:this.state.y};
                  debugger
    this.props.createPhoto(photo);
    this.navigateToIndex();
  }
  render(){
    return (
      <div >
      <Modal isOpen={this.state.modalOpen}
						 onRequestClose={this.onModalClose}
						 style={ModalStyle2}>
      <form onSubmit={this.handleSubmit}
            className="photo-form-box">
        <h3 className="new-photo-title">Add a Beard</h3>
        <button className="upload-button"
                onClick={this.upload}>
                <i className="material-icons">backup</i>
        </button>
        <div className="photo-in-modal">

          <PhotoEdit url={this.state.url} beardPosition={this.beardPosition}/>
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

import React  from 'react';
import { withRouter, hashHistory } from 'react-router';
import Modal from 'react-modal';
import { ModalStyle2 } from '../../../util/modal_style';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";
import PhotoEdit from './photo_edit';
import Icon from './icon';

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
      y: '',
      beardWidth: '',
      beardHeight: '',
      iconUrl: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
		this.beardPositionAndSize = this.beardPositionAndSize.bind(this);
  }

  onModalClose() {
	  this.setState({modalOpen: false});
    this.navigateToIndex();
	}

  beardPositionAndSize(x, y, beardWidth, beardHeight, iconUrl) {
    this.setState({x: x, y: y, beardWidth: beardWidth,
                   beardHeight: beardHeight, iconUrl: iconUrl});
  }
  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.setState({url: results[0].secure_url});
      }
    });
  }
  update(property){
    return e => this.setState({[property]: e.target.value});
  }
  navigateToIndex() {
    this.props.router.push("/photos");
  }

  handleKeyPress(e){
    if (e.key == "Enter") {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const photo = { title: this.state.title,
                    user_id: this.state.user_id,
                    url: this.state.url,
                    x: this.state.x,
                    y: this.state.y,
                    beardWidth: this.state.beardWidth,
                    beardHeight: this.state.beardHeight,
                    icon_url: this.state.iconUrl };
    this.props.createPhoto(photo);
    this.navigateToIndex();
  }
  render(){
    return (
      <div >
      <Modal isOpen={this.state.modalOpen}
						 onRequestClose={this.onModalClose}
						 style={ModalStyle2}>
      <button className="close-modal" onClick={this.onModalClose}>X</button>
      <form onSubmit={this.handleSubmit}
            className="photo-form-box"
            onKeyPress={this.handleKeyPress}>
        <h3 className="new-photo-title">Add a Beard</h3>
        <button className="upload-button"
                onClick={this.upload}>
                <Icon className="icons"
                      src='upload.png'
                      width={36}
                      height={36}/>
        </button>
        <div className="photo-in-modal">
          <PhotoEdit url={this.state.url} beardPositionAndSize={this.beardPositionAndSize}/>
        </div>

           <input type="text" value={this.state.title}
             onChange={this.update("title")} className="photo-field" placeholder="Title"/>
           <div className="button-holder">
             <input className="demo" type="submit" value="Create Photo" />
           </div>
        </form>
        </Modal>
      </div>
    );
  }
}







export default withRouter(PhotoForm);

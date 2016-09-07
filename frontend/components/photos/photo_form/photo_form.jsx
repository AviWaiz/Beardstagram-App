import React  from 'react';
import { withRouter, hashHistory } from 'react-router';
import Modal from 'react-modal';
import { ModalStyle2 } from '../../../util/modal_style';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";


class PhotoForm extends React.Component{
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
    this.state = {
      title: '',
      user_id: this.props.currentUser.user.id,
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
	  hashHistory.push('/photos');
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
    this.props.router.push("/photos");
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    const photo = {title: this.state.title,
                  user_id: this.state.user_id,
                  url: this.state.url};
    this.props.createPhoto(photo);
    this.navigateToIndex();
  }
  render(){
    let imageObj1 = new Image();
    let imageObj2 = new Image();
    if (this.state.url) {
      imageObj1.src = 'http://res.cloudinary.com/drql6e2wm/image/upload/v1473049176/gibseoa6m077y1pxbd0z.png';
    }

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


class PhotoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }
  dragStart(e){
    console.log("start");
    console.log(e);
  }
  dragEnd(e){
    console.log("end");
    console.log(e);
  }
  render() {
    const imageObj = new Image();
    imageObj.src = 'http://res.cloudinary.com/drql6e2wm/image/upload/v1473049176/gibseoa6m077y1pxbd0z.png';
    return (
      <Stage width={700} height={700}>
        <Layer>
            <MyShape2/>
            <Kimage draggable image={imageObj}
                    onDragStart={this.dragStart}
                    onDragEnd={this.dragEnd}
                    width="100"
                    height="100" />
        </Layer>
      </Stage>
    );
  }
}

const MyShape2 = () => {
  const imageObj = new Image();
  imageObj.src = 'http://res.cloudinary.com/drql6e2wm/image/upload/v1473014156/kkxsapv5oc4fylyxcjpq.jpg';

  return (
     <Kimage  image={imageObj} width="500" height="500"/>
  );
}





export default withRouter(PhotoForm);

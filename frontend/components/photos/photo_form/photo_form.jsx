import React  from 'react';
import { withRouter } from 'react-router';

class PhotoForm extends React.Component{
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
    this.state = {
      title: '',
      user_id: this.props.currentUser.id,
      url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
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
    this.props.router.push("/");
  }

  handleSubmit(e){
    e.preventDefault();
    const photo = Object.assign({}, this.state);
    this.props.createPhoto(photo);
    this.navigateToIndex();
  }
  render(){
    return (
      <div className="upload-form">
        <h3 className="new-photo-title">Upload a picture!!!</h3>
        <button className="upload-button" onClick={this.upload}>Upload new image!</button>
        <form onSubmit={this.handleSubmit}>
        <label className="photo-field">title</label>
           <input type="text" value={this.state.title}
             onChange={this.update("title")} className="photo-field"/>
           <div className="button-holder">
             <input type="submit" value="Create Photo" className="new-photo-button"/>
           </div>
        </form>


      </div>
    );
  }
}

export default withRouter(PhotoForm);

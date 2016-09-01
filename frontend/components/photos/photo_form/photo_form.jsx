import React  from 'react';

class PhotoForm extends React.Component{
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
    this.state = {
      title: '',
      user_id: this.props.currentUser.id,
      url: ''
    };

  }
  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.props.createPhoto(results[0]);
      }
    });
  }

  render(){
    return (
      <div className="upload-form">
        <button className="upload-button" onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
}

export default PhotoForm;

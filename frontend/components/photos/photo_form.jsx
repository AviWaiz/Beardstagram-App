import React  from 'react';

class PhotoForm extends React.Component{
  constructor(props){
    super(props);
  }
  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.prorps.postImage(results[0]);
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

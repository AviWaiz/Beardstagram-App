import React  from 'react';
import PhotoIndexItem from './photo_index_item';


class PhotoIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photos = this.props.photos;
    const photoKeys = Object.keys(photos);
    return(
      <div className="photo-index">
        <h1>Photos</h1>
        {
          photoKeys.map( key =>(
            <PhotoIndexItem photo={photos[key]}
             key={key}
             requestPhoto={this.props.requestPhoto}
             removeCommentAction={this.props.removeCommentAction}/>
          ))
        }
      </div>
    );
  }
}


export default PhotoIndex;

import React  from 'react';
import PhotoIndexItem from '../photo_index/photo_index_item';


class PhotoFeed extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photos = this.props.photos;
    const photoKeys = Object.keys(photos);
    return(
      <div className="photo-index">
        {
          photoKeys.map( key =>(
            <PhotoIndexItem photo={photos[key]}
             key={key}
             requestPhoto={this.props.requestPhoto}
             removeCommentAction={this.props.removeCommentAction}
             currentUser={this.props.currentUser}/>
          ))
        }
      </div>
    );
  }
}


export default PhotoFeed;

import React  from 'react';
import PhotoIndexItem from '../photo_index/photo_index_item';

class PhotoFeed extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photos = this.props.photos;
    const photoKeys = Object.keys(photos);
    const photosSorted = photoKeys.map( key => (photos[key])).sort(
      (photo1, photo2) => {
          if (photo1.created_at > photo2.created_at) return -1;
          if (photo1.created_at < photo2.created_at) return 1;
          return 0;
      });
    return(
      <div className="photo-index">
        {
          photosSorted.map( photo =>(
            <PhotoIndexItem photo={photo}
             key={photo.id}
             requestPhoto={this.props.requestPhoto}
             removeCommentAction={this.props.removeCommentAction}
             currentUser={this.props.currentUser}
             user={photo.user}/>
          ))
        }
      </div>
    );
  }
}


export default PhotoFeed;

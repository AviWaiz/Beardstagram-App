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
      <div>
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


export default PhotoFeed;

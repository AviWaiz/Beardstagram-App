import React  from 'react';
import PhotoIndexItem from './photo_index_item';


class PhotoIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.requestPhotos();
  }
  render(){
    const photos = this.props.photos;
    const photoKeys = Object.keys(photos);
    return(
      <div>
        <h1>Photos</h1>
        {
          photoKeys.map( key =>(
            <PhotoIndexItem photo={photos[key]} key={key} requestPhoto={requestPhoto}/>
          ))
        }
      </div>
    );
  }
}


export default PhotoIndex;

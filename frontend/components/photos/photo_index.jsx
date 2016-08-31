import React  from 'react';
import PhotoIndexItem from './photo_index_item';


const PhotoIndex = ({photos}) => {
  const photoKeys = Object.keys(photos);
  return(
    <div>
      <h1>Photos</h1>
      {
        photoKeys.map( key =>(
          <PhotoIndexItem photo={photos[key]} key={key} />
        ))
      }
    </div>
  );
};


export default PhotoIndex;

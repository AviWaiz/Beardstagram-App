import React  from 'react';

class PhotoIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photo = this.props.photo;
    const photoUrl = photo.url;
    return (
      <div>
        <img src={photoUrl} />
      </div>
    );
  }
}

export default PhotoIndexItem;

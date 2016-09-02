import React  from 'react';

class PhotoIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photo = this.props.photo;
    const photoUrl = photo.url;
    // const comments = photo.comments.map((comment) => (<li key={comment.id}>
    //   {comment.body}</li>));
    return (
      <div>
        <img src={photoUrl}/>
        {/* <ul>{comments}</ul> */}
      </div>
    );
  }
}

export default PhotoIndexItem;

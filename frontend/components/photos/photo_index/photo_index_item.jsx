import React  from 'react';
import CommentFormContainer from '../../comment/comment_form_container';

class PhotoIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photo = this.props.photo;
    const photoUrl = photo.url;
    const comments = photo.comments.map((comment) => (<li key={comment.id}>{comment.body}</li>));
    return (
      <div>
        <img src={photoUrl}/>
        <ul>{comments}</ul>
        <CommentFormContainer photoId={photo.id}/>
      </div>
    );
  }
}

export default PhotoIndexItem;

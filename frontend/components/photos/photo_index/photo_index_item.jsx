import React  from 'react';
import CommentFormContainer from '../../comment/comment_form_container';
import Comment from '../../comment/comment';

class PhotoIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photo = this.props.photo;
    const photoUrl = photo.url;
    const comments = photo.comments.map((comment) => (<Comment removeComment={removeComment} comment={comment} key={comment.id} />));
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

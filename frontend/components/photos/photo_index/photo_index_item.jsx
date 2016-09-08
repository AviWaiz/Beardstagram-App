import React  from 'react';
import CommentFormContainer from '../../comment/comment_form_container';
import Comment from '../../comment/comment';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";

class PhotoIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render(){
    const photo = this.props.photo;
    const photoUrl = photo.url;
    const comments = photo.comments.map((comment) => (
      <Comment removeCommentAction={this.props.removeCommentAction}
               comment={comment}
               key={comment.id} />));
    const imageObj1 = new Image();
    imageObj1.src = photoUrl;
    const imageObj2 = new Image();
    imageObj2.src = 'http://res.cloudinary.com/drql6e2wm/image/upload/v1473049176/gibseoa6m077y1pxbd0z.png';
    if (photo.x && photo.y) {
      let x = (photo.x).toString();
      let y = (photo.y).toString();
      return (
        <div onClick={this.handleClick}>
        <Stage width={400} height={400}>
          <Layer>
              <Kimage  image={imageObj1} width="400" height="400"/>
              <Kimage  image={imageObj2} width="85" height="85" x={x} y={y}/>
          </Layer>
        </Stage>
          <ul>{comments}</ul>
          <CommentFormContainer photoId={photo.id}/>
        </div>
      )
      } else {
      return(
        <div>
          <img src={photoUrl} />
          <ul>{comments}</ul>
          <CommentFormContainer photoId={photo.id}/>
        </div>
      )
    }
  }
}

export default PhotoIndexItem;

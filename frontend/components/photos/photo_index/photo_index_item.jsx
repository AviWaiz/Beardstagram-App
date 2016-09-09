import React  from 'react';
import CommentFormContainer from '../../comment/comment_form_container';
import Comment from '../../comment/comment';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";

class PhotoIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photo = this.props.photo;
    const photoUrl = photo.url;
    const iconUrl = photo.icon_url;
    const comments = photo.comments.map((comment) => (
      <Comment removeCommentAction={this.props.removeCommentAction}
               comment={comment}
               key={comment.id} />));

    const imageObj1 = new Image();
    imageObj1.src = photoUrl;

    const imageObj2 = new Image();
    if (photo.x && photo.y && photo.beardWidth && photo.beardHeight && photo.icon_url) {
      let x = (photo.x).toString();
      let y = (photo.y).toString();
      let beardWidth = photo.beardWidth.toString();
      let beardHeight = photo.beardHeight.toString();
      let iconUrl = photo.icon_url.toString();
      imageObj2.src = iconUrl;
      return (
        <div>
        <Stage width={400} height={400}>
          <Layer>
              <Kimage image={imageObj1} width="400" height="400"/>
              <Kimage image={imageObj2} width={beardWidth} height={beardHeight} x={x} y={y} />
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

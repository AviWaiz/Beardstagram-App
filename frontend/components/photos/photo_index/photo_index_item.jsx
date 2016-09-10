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
    const commentsSorted = photo.comments.sort((comment1, comment2) => {
      if (comment1.created_at > comment2.created_at) return 1;
      if (comment1.created_at < comment2.created_at) return -1;
      return 0;
    });
    const comments = commentsSorted.map((comment) => (
      <Comment removeCommentAction={this.props.removeCommentAction}
               comment={comment}
               key={comment.id}
               currentUser={this.props.currentUser} />));

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
        <div className="index-item">
        <Stage width={400} height={400}>
          <Layer>
              <Kimage image={imageObj1} width="400" height="400"/>
              <Kimage image={imageObj2} width={beardWidth} height={beardHeight} x={x} y={y} />
          </Layer>
        </Stage>
        <div className="index-item-fields">
          <div className="title">{photo.title}</div>
            <div className="comments">{comments}
              <CommentFormContainer photoId={photo.id}/>
            </div>
          </div>
        </div>
      )
      } else {
      return(
        <div className="index-item">
          <img src={photoUrl} />
          <div className="index-item-fields">
            <div className="title">{photo.title}</div>
              <div className="comments">{comments}
                <CommentFormContainer photoId={photo.id}/>
              </div>
            </div>
          </div>
      )
    }
  }
}

export default PhotoIndexItem;

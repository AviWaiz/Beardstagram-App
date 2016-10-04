import React  from 'react';
import Modal from 'react-modal';
import { ModalStyle3 } from '../../../util/modal_style';
import CommentFormContainer from '../../comment/comment_form_container';
import Comment from '../../comment/comment';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";
import { Link } from 'react-router';
import UserIcon from './user_icon';
import Icon from '../photo_form/icon.jsx';

class PhotoIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    };
    this.photoDetial = this.photoDetial.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  onModalOpen() {
    this.setState({modalOpen: true});
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  photoDetial() {
    this.onModalOpen();
  }

  render(){
    const photo = this.props.photo;
    const photoUrl = photo.url;
    const userIcon = photo.user_profile_picture;
    const created = photo.created_at.split("T")[0].split("-");
    const createdAt = created[1] + '/' +  created[2] + '/' + created[0];
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
      <div>
      <Modal isOpen={this.state.modalOpen}
						 onRequestClose={this.onModalClose}
						 style={ModalStyle3}>
        <div className="align-icon">
         <UserIcon className="user-icon-modal"
                   photo={userIcon}
                   key={photo.id} />
         <div className="align-fields">
          <div className="title">{photo.title}</div>
          <li className="user-link-modal" key={photo.user.username}>By&nbsp;
             <Link to={`/users/${photo.user.id}`}
                     id={photo.user.id}>
                   {photo.user.username}
             </Link>
             &nbsp;on&nbsp;{createdAt}
          </li>
          </div>
          &nbsp;
        </div>
         <div className="index-item-modal">
             <Stage width={400} height={400}>
               <Layer>
                   <Kimage image={imageObj1} width="400" height="400" />
                   <Kimage image={imageObj2}
                           width={beardWidth}
                           height={beardHeight}
                           x={x}
                           y={y} />
               </Layer>
             </Stage>
         </div>
         <div className="index-item-fields">
           <div className="comments">{comments}
            <CommentFormContainer photoId={photo.id}/>
           </div>
         </div>
      </Modal>
      <div className="index-item">
      <div className="index-align">
        <Stage width={400} height={400} onClick={this.photoDetial}>
          <Layer>
              <Kimage image={imageObj1} width="400" height="400" />
              <Kimage image={imageObj2}
                      width={beardWidth}
                      height={beardHeight}
                      x={x}
                      y={y} />
          </Layer>
        </Stage>
        </div>
        &nbsp;
        <div className="align-user-fields">
          <UserIcon photo={userIcon}
                    key={photo.id} />
          <li className="user-link" key={photo.user.username}>
            <Link to={`/users/${photo.user.id}`}
                    id={photo.user.id}>
                  {photo.user.username}
            </Link>
          </li>
            <div className='comment-count'>
                    <Icon className="icons"
                          src='comment_icon.png'
                          width={30}
                          height={30} />
                          {comments.length}
            </div>
          </div>
        </div>
      </div>
    );
    } else {
      return(
        <div>
    <Modal isOpen={this.state.modalOpen}
           onRequestClose={this.onModalClose}
           style={ModalStyle3}>
           <div className="align-icon">
            <UserIcon className="user-icon-modal"
                      photo={userIcon}
                      key={photo.id} />
            <div className="align-fields">
             <div className="title">{photo.title}</div>
             <li className="user-link-modal" key={photo.user.username}>By&nbsp;
                <Link to={`/users/${photo.user.id}`}
                        id={photo.user.id}>
                      {photo.user.username}
                </Link>
                &nbsp;on&nbsp;{createdAt}
             </li>
             </div>
             &nbsp;
           </div>
           <div className="index-item-modal">
             <img src={photoUrl}/>
           </div>
          <div className="index-item-fields">
              <div className="comments">{comments}
                <CommentFormContainer photoId={photo.id}/>
              </div>
          </div>
     </Modal>
        <div className="index-item">
          <div className="index-align-image">
            <img src={photoUrl} onClick={this.photoDetial}/>
          </div>
          <div className="align-user-fields">
          <UserIcon photo={userIcon}
                    key={photo.id} />
          <li className="user-link" key={photo.user.username}>
            <Link to={`/users/${photo.user.id}`}
                    id={photo.user.id}>
                  {photo.user.username}
            </Link>
          </li>
          <div className='comment-count'>
                  <Icon className="icons"
                        src='comment_icon.png'
                        width={30}
                        height={30} />
                        {comments.length}
          </div>
        </div>
      </div>
      </div>
      );
    }
  }
}

export default PhotoIndexItem;

import React  from 'react';

class Comment extends React.Component{
  constructor(props){
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment() {
    this.props.removeCommentAction(this.props.comment.id);
  }

  render(){
    if (this.props.currentUser.user.id === this.props.comment.user_id) {
      return (
        <li className="list-comment">
        <div>{this.props.comment.username}:&nbsp;{this.props.comment.body}</div>
          &nbsp;
          <button className="delete-comment" onClick={this.deleteComment}>X</button>
        </li>
      );
    } else{
      return (

        <li className="list-comment">
        <div>{this.props.comment.username}</div>
          :&nbsp;{this.props.comment.body}
        </li>
      );
    }
  }
}

export default Comment;

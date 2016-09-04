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
    return (
      <li onClick={this.deleteComment} >
        {this.props.comment.body}
      </li>
    );
  }
};

export default Comment;

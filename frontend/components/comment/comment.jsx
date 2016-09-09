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
      <li className="list-comment">
        {this.props.comment.body}
        <button onClick={this.deleteComment}>x</button>
      </li>

    );
  }
};

export default Comment;

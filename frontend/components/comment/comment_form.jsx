import React  from 'react';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state =
    {
      body: '',
      photo_id: this.props.photoId,
      user_id: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }


  handleSubmit(e){
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment(comment);
    this.setState({body: ""});
  }

  render(){
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.body}
              onChange={this.update('body')} className="comment-field" placeholder="comment"/>
        </form>
      </div>
    );
  }
};

export default CommentForm;

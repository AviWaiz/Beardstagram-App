import React  from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from "../photos/photo_index/photo_index_item";
import isEmpty from "lodash/isEmpty";

class UserShow extends React.Component{
  constructor(props){
    super(props);
  }
  // componentDidMount(){
  //   debugger
  //   this.props.requestUser(this.props.params.id);
  // }
  // componentWillReceiveProps(nextProps){
  //   this.props.requestUser(nextProps.params.id);
  //   this.newUserId = nextProps.params.id;
  // }

  render(){
    const photos = this.props.photos
    const photoKeys = Object.keys(photos);
    return(
        <div>
          <h1>Photos</h1>
          {
            photoKeys.map( key =>(
              <PhotoIndexItem photo={photos[key]} key={key} removeCommentAction={this.props.removeCommentAction} />
            ))
          }
        </div>
      );
  }
}

export default withRouter(UserShow);

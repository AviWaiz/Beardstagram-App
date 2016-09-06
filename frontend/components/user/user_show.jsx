import React  from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from "../photos/photo_index/photo_index_item";
import isEmpty from "lodash/isEmpty";

class UserShow extends React.Component{
  constructor(props){
    super(props);
  }

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

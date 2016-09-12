import React  from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from "../photos/photo_index/photo_index_item";
import isEmpty from "lodash/isEmpty";


class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.params.id
    };
  }

  render(){
    const photos = this.props.photos;
    const photoKeys = Object.keys(photos);
    const photosSorted = photoKeys.map( key => (photos[key])).sort(
      (photo1, photo2) => {
          if (photo1.created_at > photo2.created_at) return -1;
          if (photo1.created_at < photo2.created_at) return 1;
          return 0;
    });
    const users = this.props.users;
    let userShow;
    if (!isEmpty(users)){
      for (let i = 0; i < users.length; i++) {
        userShow = users[0][Object.keys(users[i])[0]];
      }
    }
    if(userShow) {
      return(
        <div>
        <div>{userShow["username"]}</div>
        <div>Photos: {userShow["photos"].length}</div>
        <div>following: {userShow["following"].length}</div>
        <div>followers: {userShow["followers"].length}</div>
          <div className="photo-index">
            {
              photosSorted.map( photo =>(
                <PhotoIndexItem photo={photo}
                 key={photo.id}
                 requestPhoto={this.props.requestPhoto}
                 removeCommentAction={this.props.removeCommentAction}
                 currentUser={this.props.currentUser}/>
              ))
            }
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(UserShow);

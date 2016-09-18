import React  from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from "../photos/photo_index/photo_index_item";
import isEmpty from "lodash/isEmpty";
import ProfilePicture from './profile_picture';


class UserShow extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    this.userId = parseInt(this.props.params.id);
    const photos = this.props.photos;
    const photoKeys = Object.keys(photos);
    const photosSorted = photoKeys.map( key => (photos[key])).sort(
      (photo1, photo2) => {
          if (photo1.created_at > photo2.created_at) return -1;
          if (photo1.created_at < photo2.created_at) return 1;
          return 0;
    });

    let userShow;
    let users = this.props.users;
    if (!isEmpty(users)){
      for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let key = Object.keys(user)[0];
        if (this.userId === user[key]["id"]) {
          userShow = user[key];
        }
      }
    }
    if(userShow) {
      return(
        <div>
          <div>{<ProfilePicture photo={userShow["profile_pic"]}
                 key={userShow["profile_pic"]["id"]}
                 requestPhoto={this.props.requestPhoto}
                 currentUser={this.props.currentUser}/>
               }
          </div>

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
      return <div>no Photos</div>;
    }
  }
}

export default withRouter(UserShow);

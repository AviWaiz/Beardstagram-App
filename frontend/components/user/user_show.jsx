import React  from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from "../photos/photo_index/photo_index_item";
import isEmpty from "lodash/isEmpty";
import ProfilePicture from './profile_picture';


class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser_following: this.props.currentUser_following,
      following: this.props.currentUser_following.includes(parseInt(this.props.params.id))
    };
    this.followButton = this.followButton.bind(this);
    this.followToggle = this.followToggle.bind(this);
  }

  followButton(){
    if (this.state.following) {
      return <div className="demo" onClick={this.followToggle}>Unfollow</div>;
    } else {
      return <div className="demo" onClick={this.followToggle}>follow</div>;
    }
  }

  followToggle() {
    if(this.state.following){
      this.props.unFollow(this.userId);
      this.setState({following: false});
    } else {
      this.props.Follow(this.userId);
      this.setState({following: true});
    }
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
          {this.props.currentUser.user.id == this.props.params.id ? null : this.followButton()}
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

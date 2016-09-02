import React  from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from "../photos/photo_index/photo_index_item";
import isEmpty from "lodash/isEmpty";

class UserShow extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestUser(this.props.params.id);
  }
  componentWillReceiveProps(nextProps){
    this.props.requestUser(nextProps.params.id);
  }
  render(){
    const users = this.props.users;
    if (!isEmpty(users)) {
      // const photos = users[this.props.params.id].photos;

      return(
        <div>
          <h1>Photos</h1>
          {/* {
            photos.map( photo =>(
              <PhotoIndexItem photo={photo} key={photo.id} />
            ))
          } */}
        </div>
      );
    }
    else {return( <div>hello</div>);}
  }
}

export default withRouter(UserShow);

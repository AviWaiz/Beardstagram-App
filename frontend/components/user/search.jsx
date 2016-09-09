import React  from 'react';
import {Link} from 'react-router';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state =
    {
      username: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value})
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.searchUsers(nextState.username)
  }

  handleSubmit(e){
    e.preventDefault();
    const userusername = this.state.username;
    this.props.searchUsers(userusername);
    this.setState({username: ""});
  }

  render(){
    // let results;
    // if (this.props.users){
    //   let users = this.props.users;
    //   let userKeys = Object.keys(users);
    //   results = userKeys.map((key) => {
    //     return( <li key={users[key].username}>
    //               <Link to={`/users/${users[key].id}`}>{users[key].username}</Link>
    //             </li>
    //     );
    //   })
    // }
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username}
              onChange={this.update('username')} className="comment-field" placeholder="Search User"/>
        </form>
        {/* {results} */}
      </div>
    );
  }
};

export default Search;

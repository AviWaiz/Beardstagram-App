import React  from 'react';
import {Link, withRouter} from 'react-router';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state =
    {
      username: '',
    };
    this.results= null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.matches = this.matches.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  update(property){
    return e =>{
      this.setState({[property]: e.target.value});
      this.props.searchUsers(e.target.value);
    };
  }

  clearSearch() {
    this.setState({username: ""});
  }

  matches() {
    if (this.props.users){
      let users = this.props.users;
      let userKeys = Object.keys(users);
      this.results = userKeys.map((key) => {
        return(
          <li key={users[key].username}>
            <Link to={`/users/${users[key].id}`} onClick={this.clearSearch}>
                {users[key].username}
            </Link>
          </li>
        );
      });
    }
  }


  handleSubmit(e){
    e.preventDefault();
    const firstResult = this.props.users[0];
    this.props.router.push(`users/${firstResult.id}`);
    this.setState({username: ""});
  }

  render(){
    this.matches();
    if (!this.state.username){
      this.results = null;
    }
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
            <input className="search-form"
                   type="text"
                   value={this.state.username}
                   onChange={this.update('username')}
                   placeholder="SEARCH USER"/>
        </form>
        <ul className="search-results">{this.results}</ul>
      </div>
    );
  }
}

export default withRouter(Search);

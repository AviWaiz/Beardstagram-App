import React  from 'react';
import {Link, withRouter} from 'react-router';
import isEmpty from "lodash/isEmpty";



class Search extends React.Component{
  constructor(props){
    super(props);
    this.state =
    {
      username: '',
      searchIndex: 0.0,
    };
    this.results= null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeResult = this.changeResult.bind(this);
    this.matches = this.matches.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.setResultHover = this.setResultHover.bind(this);
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
    if(!isEmpty(this.props.search)){
      this.results = this.props.search.map( (user) => {
        let key = Object.keys(user)[0];
        return(
          <li key={user[key]["username"]}>
            <Link to={`/users/${user[key]['id']}`} onClick={this.clearSearch}>
                {user[key]['username']}
            </Link>
          </li>
        );
      });
    } else {
      this.results = null;
    }
  }

  changeResult(e){
    if (this.results) {
      const length = this.results.length;
      if (e.keyCode === 38) {
        this.setState({searchIndex: (this.state.searchIndex + 1) % length});
      } else if (e.keyCode === 40) {
        this.setState({searchIndex: (this.state.searchIndex - 1) < 0 ? length - 1 : this.state.searchIndex - 1 });
      }
    }
  }

  setResultHover(){

  }

  handleSubmit(e){
    e.preventDefault();
    const result = this.props.search[this.state.searchIndex];
    const key = Object.keys(result)[0];
    const user = result[key];
    this.props.router.push(`users/${user.id}`);
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
                   placeholder="SEARCH USERS"
                   onKeyDown={this.changeResult}/>
        </form>
        <ul className="search-results">{this.results}</ul>
      </div>
    );
  }
}

export default withRouter(Search);

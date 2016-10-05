# BeardStagram

[Try BeardStagram][heroku]

[BeardStagram][heroku] is a social web application that allows users add beard icons to their pictures. Inspired by social media sites, BeardStagram is built using Ruby on Rails on the backend with PostgreSQL databased, and React.js with a Redux.js framework in the frontend.


[heroku]: https://beardstagram-app.herokuapp.com


##Features

* User authentication for secure login and BeardStagrm demo login
* React modals
* Uploading pictures
* Adding beards to pictures through drag and drop feature
* Realtime user search bar
* Browse user show pages with the ability to follow other users
* User home feed contains photos of all other users being followed
* photos contain user comments

## BeardStagrm Walk-through

### BeardStagrm Splash Page


BeardStagrm has secure user authentication for user login and signup. BeardStagrm also contains a demo login for app exploration. BeardStagrm is a single-page application is handled through react router and front-end auth. Using 'ensureLoggedIn', and 'redirectIfLoggedIn' methods, React-Router checks the redux store if there is a currentUser in state. If the currentUser is nil, the app will render the splash page. Otherwise, it will render the app's index page.

BeardStagrm can handle multiple sessions to be created allowing for a bug-free experience regardless of the amount of people users logged in.

![splash]
[splash]: ./docs/splash.png


#### Sample Authentication Code Snippets

```ruby
class Api::SessionsController < ApplicationController

  def create
    @user = User.includes(:followees).find_by_credentails(
    params[:user][:username],
    params[:user][:password])

    if @user
      login(@user)
      render :show
    else
      render(
      json: ["Invalid username/password combination"],
      status: 401
      )
    end
  end

  ...

end

class ApplicationController < ActionController::Base

  ...

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentails']}, status: 401 if !current_user
  end

  ...

end

class User < ActiveRecord::Base
  ...

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentails(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end

  ...
end
```



### Photo Upload With Beard Drag and Drop

BeardStagrm takes advantage of Cloudinary's API to upload and host images. Users can upload their photos using the Beard me! option. Once an Image is uploaded to Cloudinary the user may add a beard of their choice. Once submitted a user is redirected to their photo feed where their new bearded photo will appear.

'PhotoEdit' and 'PhotoForm' handle photo uploads with drag and drop feature.

'PhotoFeed' Component listens to photos in the Redux store and re-renders on changes of stores state.

![photofeed]
[photofeed]: ./docs/photofeed.png

![photoupload]
[photoupload]: ./docs/photoupload.png

#### Sample Photo upload Code Snippets

```javascript

class PhotoForm extends React.Component{
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
    this.state = {
      title: '',
      user_id: this.props.currentUser.user.id,
      url: '',
      modalOpen: true,
      x: '',
      y: '',
      beardWidth: '',
      beardHeight: '',
      iconUrl: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.navigateToIndex = this.navigateToIndex.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
		this.beardPositionAndSize = this.beardPositionAndSize.bind(this);
  }

  onModalClose() {
	  this.setState({modalOpen: false});
    this.navigateToIndex();
	}

  beardPositionAndSize(x, y, beardWidth, beardHeight, iconUrl) {
    this.setState({x: x, y: y, beardWidth: beardWidth,
                   beardHeight: beardHeight, iconUrl: iconUrl});
  }
  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.setState({url: results[0].url});
      }
    });
  }
  update(property){
    return e => this.setState({[property]: e.target.value});
  }
  navigateToIndex() {
    this.props.router.push("/photos");
  }

  handleKeyPress(e){
    if (e.key == "Enter") {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const photo = { title: this.state.title,
                    user_id: this.state.user_id,
                    url: this.state.url,
                    x: this.state.x,
                    y: this.state.y,
                    beardWidth: this.state.beardWidth,
                    beardHeight: this.state.beardHeight,
                    icon_url: this.state.iconUrl };
    this.props.createPhoto(photo);
    this.navigateToIndex();
  }
  render(){
    return (
      <div >
      <Modal isOpen={this.state.modalOpen}
						 onRequestClose={this.onModalClose}
						 style={ModalStyle2}>
      <form onSubmit={this.handleSubmit}
            className="photo-form-box"
            onKeyPress={this.handleKeyPress}>
        <h3 className="new-photo-title">Add a Beard</h3>
        <button className="upload-button"
                onClick={this.upload}>
                <Icon className="icons"
                      src='upload.png'
                      width={36}
                      height={36}/>
        </button>
        <div className="photo-in-modal">
          <PhotoEdit url={this.state.url} beardPositionAndSize={this.beardPositionAndSize}/>
        </div>

           <input type="text" value={this.state.title}
             onChange={this.update("title")} className="photo-field" placeholder="Title"/>
           <div className="button-holder">
             <input className="demo" type="submit" value="Create Photo" />
           </div>
        </form>
        </Modal>
      </div>
    );
  }
}

```

### User Search, and User Show Page

Users can navigate to other User Show pages through User search bar.
'Search' component is in charge of the logic for handling real time user search. The Search bar listens to both mouseOver and keyPress events to handle search-result navigation.

Once a search-result is chosen the user is navigated through react-router's 'Link' tag to that specific user show page.
'UserShow' is where a specific users profile is displayed with all of that users photos, photo count, profile picture, follow counts, and follow/unfollow button.



#### Sample Search

```javascript
class Search extends React.Component{
  ...
  update(property){
    return e =>{
      this.setState({[property]: e.target.value, searchIndex: 0.0});
      this.props.searchUsers(e.target.value);
    };
  }

  clearSearch() {
    this.setState({username: "", searchIndex: 0.0});
  }

  resetIndex(e){
    e.preventDefault();
    $(`#${this.names[this.state.searchIndex]}`).removeClass('selected');
    this.resetMouseOver(e);
  }

  resetMouseOver(e) {
    e.preventDefault();
    this.mouseover ? this.mouseover = false : this.mouseover = true;
  }


  matches() {
    this.names = [];
    if(!isEmpty(this.props.search)){
      this.results = this.props.search.map( (user) => {
        let key = Object.keys(user)[0];
        this.names.push(user[key]["username"]);
        return(
          <li key={user[key]["username"]}>
            <Link to={`/users/${user[key]['id']}`}
            // once the user clicks a link the search bar will clear
                  onClick={this.clearSearch}
                  id={user[key]["username"]}
                  onMouseOver={this.resetIndex}
                  onMouseLeave={this.resetMouseOver}>
                {user[key]['username']}
            </Link>
          </li>
        );
      });
    } else {
      this.results = null;
    }
  }

  setResultHover(e) {
    return e;
  }

  changeResult(e){
    if (this.results && !this.mouseover) {
      const length = this.results.length;
      if (e.keyCode === 40) {
        $(`#${this.names[this.state.searchIndex]}`).removeClass('selected');
        e.preventDefault();
        this.setState({searchIndex: (this.state.searchIndex + 1) > (length - 1) ? 0.0 : (this.state.searchIndex + 1)});
      } else if (e.keyCode === 38) {
        $(`#${this.names[this.state.searchIndex]}`).removeClass('selected');
        e.preventDefault();
        this.setState({searchIndex: (this.state.searchIndex - 1) < 0 ? (length - 1) : (this.state.searchIndex - 1)});
      }
    }
  }

  componentWillUpdate(nextProps, nextState) {
    $(`#${this.names[nextState.searchIndex]}`).addClass('selected');
  }


  handleSubmit(e){
    e.preventDefault();
    if (!isEmpty(this.props.search)) {
      const result = this.props.search[this.state.searchIndex];
      const key = Object.keys(result)[0];
      const user = result[key];
      this.props.router.push(`users/${user.id}`);
      this.setState({username: ""});
    } else {
      this.setState({username: ""});
    }
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
  ...
```

### Comments

BeardStagrm comments are unique, each one lives at a specific spot on their respective design. Hovering over comments in the 'commentBox' displays their location on the design while clicking on the design creates a comment at that location.

Green comment pins reference a comment being created, while yellow comment pins reference a comment being viewed.

In addition to having body, design_id, and user_id columns in the database, comments contain X and Y coordinates that eventually pertain to their parent div (the design they belong to).

BeardStagrm's API efficiently returns each designs' comments through a single query to the database.

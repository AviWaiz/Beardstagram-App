# Beardstagram

[Heroku link][heroku] **NB:** Beardstagram!

[heroku]: https://beardstagram-app.herokuapp.com/
## Minimum Viable Product
Beardstagram is a web application inspired by Instagram that will be built using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Hosting on Heroku
- [ ] Photos
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
  - [ ] Description for Photos
  - [ ] Upload, edit, and delete Photos
  - [ ] Users can comment on photos of users that they follow
- [ ] Photos Feed
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
  - [ ] User's Photos Feed has photos of other users that user is following
- [ ] likes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] follows/search
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Bonus
  - [ ] Beardstagram(drag and drop beard icons on pictures)
  - [ ] follow suggestions
  - [ ] user search
  - [ ] tags
  - [ ] Direct messaging
  - [ ] hashtags

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 days, W1 W 12pm)

**Objective:** Functioning rails project with front-end Authentication

- [ ] Create new project
- [ ] Create `User` model
- [ ] Authentication backend setup
- [ ] Create `StaticPages` controller and root view
- [ ] Set up webpack & Redux structure with skeleton files
- [ ] Set up `APIUtil` to interact with the API
- [ ] Set up Redux for frontend auth
- [ ] User signup/signin components
- [ ] Blank landing component after signin
- [ ] Style signin/signup components
- [ ] User show page (contains all the users photos)
- [ ] Seed users

### Phase 2: Photos Model, API, and components (2 days, W1 F 6pm)

**Objective:** Photos can be created, read, edited and destroyed through
the API.

- [ ] create `Photo` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Photos (`PhotosController`)
- [ ] jBuilder views for Photos
- [ ] Test out API interaction in the console.
- [ ] Allow for photo uploads with Cloudinary
- Implement each Photos component, building out the Redux structure as needed.
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoForm`
- [ ] Save Photos to Cloudinary when the form loses focus or is left idle after editing.
- [ ] Style Photos components
- [ ] Seed Photos
- [ ] make sure that when viewing a specific user you can see all of their photos

### Phase 3: Start Styling (0.5 days, W1 Friday 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 4: comments (1 day, W1 weekend)

**Objective:** Add Comments to pictures.

- [ ] create `Comments` model and join table
- build out API, redux loop, and components for:
  - [ ] fetching comments for photos
  - [ ] adding comments to photos
  - [ ] Home feed displays comments under photos


### Phase 5: - infinite scroll for Photos Index (1 day, W2 Sunday)

**objective:** Add infinite scroll to Photos Index

- [ ] Paginate Photos Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Make sure styling still looks good
- [ ] Ensure we have enough seeded photos to demo infinite scroll
### Phase 6: follow and likes (2 day, W2 Tu 10pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.
- [ ] follows users follow other users
  - [ ] follow suggestions friends
  - [ ] follow search
- [ ] likes

### Bonus Features (TBD)
- [ ]  Beard portrait.
  - [ ] Have the ability to drag and drop beard icons on photos
- [ ] facebook login
- [ ] tags
- [ ] search users by comments

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md

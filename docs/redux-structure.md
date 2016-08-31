# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.


### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `receiveErrors`
  0. invoked from an API callback
  0. the `SessionReducer` stores `errors` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Photos Cycles

### Photos API Request Actions

* `fetchAllPhotos`
  0. invoked from `PhotosIndex` `didMount`/`willReceiveProps`
  0. `GET /api/photos` is called.
  0. `receiveAllPhoto` is set as the success callback.

* `createPhoto`
  0. invoked from new photo button `onClick`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `fetchSinglePhoto`
  0. invoked from `PhotosIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:photoId` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `updatePhoto`
  0. invoked from `PhotoForm` `onSubmit`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `destroyPhoto`
  0. invoked from delete photo button `onClick`
  0. `DELETE /api/photos/:photoId` is called.
  0. `removePhoto` is set as the success callback.

### Photo API Response Actions

* `receiveAllPhoto`
  0. invoked from an API callback
  0. the `PhotoReducer` updates `photos` in the application's state.

* `receiveSinglePhoto`
  0. invoked from an API callback
  0. the `NoteReducer` updates `photos[id]` in the application's state.

* `removePhoto`
  0. invoked from an API callback
  0. the `NoteReducer` removes `photos[id]` from the application's state.

### Containers

* `PhotoIndex` component subscribes to the Redux store.


## Comments Cycles

### Comments API Request Actions

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/comments` is called.
  0. `receiveAllComments` is set as the success callback.

* `createComment`
  0. invoked from new comment button `onClick`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the callback.

* `fetchSingleComment`
  0. invoked from `CommentIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/comments/:id` is called.
  0. `receiveSingleComment` is set as the success callback.

* `updateComment`
  0. invoked from `CommentForm` `onSubmit`
  0. `POST /api/comments` is called.
  0. `receiveSingleComment` is set as the success callback.

* `destroyComment`
  0. invoked from delete comment button `onClick`
  0. `DELETE /api/comments/:id` is called.
  0. `removeComment` is set as the success callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. The `Comment` reducer updates `comments` in the application's state.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. The `Comment` reducer updates `comments[id]` in the application's state.

* `removeComment`
  0. invoked from an API callback.
  0. The `Comment` reducer removes `comments[id]` from the application's state.

### Containers

* `CommentsIndex` component subscribes to the Redux store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when there is text
  0. `GET /api/notes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.

### Containers

* The `SearchBarSuggestions` component subscribes to the Redux store.

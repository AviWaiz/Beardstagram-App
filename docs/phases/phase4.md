### Phase 4: comments (1 day, W1 weekend)


## Rails
### Models
* Comment


### Controllers
* Api::CommentsController (create, destroy, index, show, update)

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder

## Redux
### Views (React Components)
* CommentsIndex
  - CommentIndexItem
* CommentForm

### Reducers
* Comment

### Actions
* `ApiActions.receiveAllComments`
* `ApiActions.receiveSingleComment`
* `ApiActions.deleteComment`
* `CommentActions.fetchAllComments`
* `CommentActions.fetchSingleComment`
* `CommentActions.createComment`
* `CommentActions.editComment`
* `CommentActions.destroyComment`

### ApiUtil
* `ApiUtil.fetchAllComments`
* `ApiUtil.fetchSingleComment`
* `ApiUtil.createComment`
* `ApiUtil.editComment`
* `ApiUtil.destroyComment`

## Gems/Libraries

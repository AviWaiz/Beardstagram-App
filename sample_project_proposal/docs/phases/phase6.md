### Phase 6: follow and likes (2 day, W2 Tu 10pm)

## Rails
### Models
follows
likes
### Controllers
* Api::FollowsController (create, destroy, index, show, update)
* Api::LikesController (create, destroy, index, show, update)

### Views
* follows/index.json.jbuilder
* likes/show.json.jbuilder
## Redux
### Views (React Components)

### Reducers

### Actions
* `ApiActions.receiveAllfollowers`
* `ApiActions.receiveAllfollowees`
* `ApiActions.receiveSinglefollower`
* `ApiActions.receiveSinglefollowee`
* `ApiActions.deletefollowee`
* `ApiActions.deleteFollower`
* `FollowerActions.fetchAllfollowers`
* `FollowerActions.fetchAllfollowees`
* `FollowerActions.fetchSingleFollower`
* `FollowerActions.fetchSingleFollowee`
* `FollowerActions.destroyComment`
### ApiUtil
* `ApiUtil.fetchAllfollowers`
* `ApiUtil.fetchAllfollowees`
* `ApiUtil.fetchSinglefollower`
* `ApiUtil.fetchSinglefollowee`
* `ApiUtil.createfollower`
* `ApiUtil.createfollowee`
* `ApiUtil.editfollower`
* `ApiUtil.editfollowee`
* `ApiUtil.destroyfollower`
* `ApiUtil.destroyfollowee`
## Gems/Libraries

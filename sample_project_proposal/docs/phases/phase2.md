### Phase 2: Photos Model, API, and components (2 days, W1 F 6pm)

## Rails
### Models
* Photo

### Controllers
* Api::PhotosController (create, destroy, index, show, update)

### Views
* photos/index.json.jbuilder
* photos/show.json.jbuilder

## Redux
### Views (React Components)
* PhotosIndex
  - PhotosIndexItem
* PhotoForm

### Reducers
* Photo

### Actions
* `ApiActions.receiveAllPhotos`
* `ApiActions.receiveSinglePhoto`
* `ApiActions.deletePhoto`
* `PhotoActions.fetchAllPhotos`
* `PhotoActions.fetchSinglePhoto`
* `PhotoActions.createPhoto`
* `PhotoActions.editPhoto`
* `PhotoActions.destroyPhoto`

### ApiUtil
* `ApiUtil.fetchAllPhotos`
* `ApiUtil.fetchSinglePhoto`
* `ApiUtil.createPhoto`
* `ApiUtil.editPhoto`
* `ApiUtil.destroyPhoto`

## Gems/Libraries

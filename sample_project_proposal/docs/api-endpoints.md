# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:userId/photos`
  - this is for the user show page
- `GET /api/users/:userId/photos/:photosId`


### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### photos

- `GET /api/photos`
  - photos index/search
- `POST /api/photos`
- `GET /api/photos/:id`
  -returns photo's comments
  -returns photo's likes
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Comments
- `GET /api/photos/:photos/comments/:commentId`
- `POST /api/photos/:photos/comments`
- `PATCH /api/photos/:photos/comments/:commentId`

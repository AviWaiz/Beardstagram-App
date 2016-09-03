export const PhotoConstants = {
  RECEIVE_PHOTOS: "RECEIVE_PHOTOS",
  RECEIVE_PHOTO: "RECEIVE_PHOTO",
  REQUEST_PHOTOS: "REQUEST_PHOTOS",
  REQUEST_PHOTO: "REQUEST_PHOTO",
  CREATE_PHOTO: "CREATE_PHOTO",
  CREATE_COMMENT: "CREATE_COMMENT",
  REMOVE_COMMENT: "REMOVE_COMMENT",
  RECEIVE_COMMENT: "RECEIVE_COMMENT"
};

export const requestPhotos = () => ({
  type: PhotoConstants.REQUEST_PHOTOS
});

export const requestPhoto = id => ({
  type: PhotoConstants.REQUEST_PHOTO,
  id
});

export const receivePhotos = photos => ({
  type: PhotoConstants.RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: PhotoConstants.RECEIVE_PHOTO,
  photo
});

export const createPhoto = photo => ({
  type: PhotoConstants.CREATE_PHOTO,
  photo
});

export const createComment = comment => ({
    type: PhotoConstants.CREATE_COMMENT,
    comment
});
export const receiveComment = comment => ({
    type: PhotoConstants.RECEIVE_COMMENT,
    comment
});

export const removeComment = id => ({
    type: PhotoConstants.REMOVE_COMMENT,
    id
});

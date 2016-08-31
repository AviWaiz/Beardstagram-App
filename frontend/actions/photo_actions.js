export const PhotoConstants = {
  RECEIVE_PHOTOS: "RECEIVE_PHOTOS",
  RECEIVE_PHOTO: "RECEIVE_PHOTO",
  REQUEST_PHOTOS: "REQUEST_PHOTOS",
  REQUEST_PHOTO: "REQUEST_PHOTO",
  CREATE_PHOTO: "CREATE_PHOTO",
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

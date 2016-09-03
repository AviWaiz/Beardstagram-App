export const fetchPhotos = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'api/photos',
    success,
    error
  });
};

export const fetchPhoto = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`,
    success,
    error
  });
};

export const createPhoto = (photo, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/photos`,
    data: {photo: photo},
    success,
    error
  });
};

export const createComment = (comment, success) => {
  $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: {comment: comment},
    success
  });
};

export const removeComment = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `api/comments/${id}`,
    success,
    error: () => {
      console.log("comment error");
    }
  });
};

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
    method: 'GET',
    url: `api/photos`,
    data: photo,
    success,
    error
  });
};

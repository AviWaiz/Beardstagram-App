export const fetchUser = (id, success) => {
  $.ajax({
    type: 'GET',
    url: `api/users/${id}`,
    success,
    error: () => console.log('error')
  });
};

export const fetchUsers = (success) => {
  $.ajax({
    type: 'GET',
    url: `api/users`,
    success,
    error: () => console.log('error')
  });
};
export const updateUser = (data,success) => {
  $.ajax({
    type: 'PATCH',
    url: `api/users/${data.id}`,
    data: {user: {profile_id : data.profile_id }},
    success,
    error: () => console.log('error')
  });
};

export const createFollow = (id, success) => {
  $.ajax({
    type: 'POST',
    url: `api/users/${id}/follow/`,
    data: { id: id },
    success,
    error: () => console.log('error')
  });
};

export const destroyFollow = (id, success) => {
  $.ajax({
    type: 'DELETE',
    url: `api/users/${id}/follow/`,
    data: { id: id },
    success,
    error: () => console.log('error')
  });
};

export const fetchUser = (id, success) => {
  $.ajax({
    type: 'GET',
    url: `api/users/${id}`,
    success,
    error: () => console.log('error')
  });
};

export const search = (query, success) => {
  $.ajax({
    type: 'GET',
    url: 'api/users/search',
    data: {query: query},
    success
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

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

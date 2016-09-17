export const search = (query, success) => {
  $.ajax({
    type: 'GET',
    url: 'api/users/search',
    data: {query: query},
    success
  });
};

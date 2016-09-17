export const SearchConstants = {
  SEARCH_USERS: "SEARCH_USERS",
  RECEIVE_SEARCH: "RECEIVE_SEARCH"
};

export const searchUsers = (username) => ({
    type: SearchConstants.SEARCH_USERS,
    username
});

export const receiveSearch = (users) => ({
    type: SearchConstants.RECEIVE_SEARCH,
    users
});

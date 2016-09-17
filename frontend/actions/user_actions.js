export const UserConstants = {
  RECEIVE_USERS: "RECEIVE_USERS",
  REQUEST_USERS: "REQUEST_USERS",
  RECEIVE_USER: "RECEIVE_USER",
  REQUEST_USER: "REQUEST_USER",
  SEARCH_USERS: "SEARCH_USERS"
};

export const receiveUser = (user) => ({
    type: UserConstants.RECEIVE_USER,
    user
});


export const requestUser = (id) => ({
    type: UserConstants.REQUEST_USER,
    id
});
export const receiveUsers = (users) => ({
    type: UserConstants.RECEIVE_USERS,
    users
});


export const requestUsers = () => ({
    type: UserConstants.REQUEST_USERS,
});

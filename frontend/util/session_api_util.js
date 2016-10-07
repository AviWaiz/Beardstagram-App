export const signUp = (user, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: user,
    success,
    error
  });
};

export const logIn = (user, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/session',
    data: user,
    success,
    error
  });
};

export const requestCurrentUser = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'api/session',
    success,
    error
  });
};

export const logOut = (success) => {
  $.ajax({
    type: 'DELETE',
    url: 'api/session',
    success,
    error: () => {
      console.log("Logout error in SessionApiUtil#logOut");
    }
  });
};

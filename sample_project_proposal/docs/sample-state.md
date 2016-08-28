```js
{
  currentUser: {
    id: 1,
    username: "sirspamalot",
    session_token: "XXXXXXXXXXX",
    password_digest: "XXXXXXXXXXXX"
    followee_id: 1,
    follower_id: [1,2,3,4,5,6,7]
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPhoto: {errors: ["body can't be blank"]}
  },
  Photos: {
    1: {
      title: "Redux",
      user_id: 1,
      body: "Grew my first beard!"
      comments: {
        1: {
          body: "Sick Beard Bro!",
          user_id: 1,
          photo_id: 1
        }
      }
    }
  },
}
```

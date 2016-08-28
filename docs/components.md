## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **LoginForm**
  * **SignupForm**
  * **Navbar**
    * Home(splash page)
    * PhotoForm(upload)
    * User Search
      * UserShowPage
        * UserPhotoIndex
          * PhotoIndexItem
            * CommentIndex
              * CommentIndexItem
              * CommentForm
    * PhotosIndex
      * PhotoIndexItem
        * CommentIndex
          * CommentIndexItem
          * CommentForm



## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** `/login`
  * **component** `SignupForm` **path:** `/signup`
  * **component** `PhotoForm` **path:** `/PhotoForm`
  * **component** `UserSearch` **path:** `/Search`
    * **component** `UserShowPage` **path:** `/users/:userId`
  * **component:** `PhotosIndex` **path:** `/photos`
    * **component:** `PhotosIndexItem` **path:** `/photos/:photoId`
      * **component:** `CommentIndex` **path:** `/photos/:photoid/comments`

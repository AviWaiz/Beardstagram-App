# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Photo.destroy_all
Comment.destroy_all
Follow.destroy_all


users = User.create([
  { username: 'Avinoam', password: '1234567'},
  { username: 'a', password: '1234567'},
  { username: 'Avi', password: 'Waizman'},

])

photos = Photo.create([
  {
    title: "Test",
    url: "http://res.cloudinary.com/drql6e2wm/image/upload/v1472668811/images_3_katu0s.jpg",
    user_id: 1
  },
  {
    title: "Test",
    url: "http://res.cloudinary.com/drql6e2wm/image/upload/v1472668715/the_beard__by_stalkingmeat-d3hlhnv_inj8ys.jpg",
    user_id: 2
  },
  {
    title: "Test",
    url: "http://res.cloudinary.com/drql6e2wm/image/upload/v1472668715/tumblr_nfwfhx10ww1rhfl7ko1_1280_nbrmhn.gif",
    user_id: 3
  },
  {
    title: "Test",
    url: "http://res.cloudinary.com/drql6e2wm/image/upload/v1472668714/schick-free-your-skin-animal-beards-designboom-03_d2lxtg.jpg",
    user_id: 1
  },
  {
    title: "Test",
    url: "http://res.cloudinary.com/drql6e2wm/image/upload/v1472668714/75e3c45f2018c2ab363e8500ad5dcb16_rxrhcp.jpg",
    user_id: 2
  },

  {
    title: "Test",
    url: "http://res.cloudinary.com/drql6e2wm/image/upload/v1472668713/download_1_iodm94.jpg",
    user_id: 1
  },
  {
    title: "Test",
    url: "http://res.cloudinary.com/drql6e2wm/image/upload/v1472668253/manuaryme_emfelh.png",
    user_id: 2
  },
])



comments = Comment.create([
  {
    body: "hello world",
    user_id: 1,
    photo_id: 1
  },
  {
    body: "hello world",
    user_id: 1,
    photo_id: 1
  },
  {
    body: "hello world",
    user_id: 1,
    photo_id: 1
  },
  {
    body: "hello world",
    user_id: 2,
    photo_id: 1
  },
  {
    body: "hello world",
    user_id: 3,
    photo_id: 1
  },
  {
    body: "hello world",
    user_id: 1,
    photo_id: 2
  },
  {
    body: "hello world",
    user_id: 2,
    photo_id: 2
  },
  {
    body: "hello world",
    user_id: 3,
    photo_id: 2
  }
])

follows = Follow.create([
  {
    followee_id: 2,
    follower_id: 1
  },
  {
    followee_id: 2,
    follower_id: 3
  },
  {
    followee_id: 3,
    follower_id: 2
  },
  {
    followee_id: 1,
    follower_id: 2
  }
])

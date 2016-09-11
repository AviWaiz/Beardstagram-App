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
  { username: 'Guest', password: '12345678'},
  { username: 'Avi', password: 'Waizman'},

])

photos = Photo.create([
  {
    title: "Roy's Beard",
    user_id: 1,
    url:
     "http://res.cloudinary.com/drql6e2wm/image/upload/v1473561809/14322537_10153842683461304_1221319818637273910_n_qbvadz.jpg",

  },
  {
    title: "Business Beard",
    user_id: 1,
    url:
     "http://res.cloudinary.com/drql6e2wm/image/upload/v1473561809/14238197_10153841467901304_254298978886254322_n_uh7ofx.jpg",

  },
  {
    title: "Hipster Beard!!",
    user_id: 1,
    url:
     "http://res.cloudinary.com/drql6e2wm/image/upload/v1473561809/14264960_10153841466281304_1355392582794354718_n_vja9l6.jpg",

  },
  {
    title: "Five O'clock shadow",
    user_id: 1,
    url:
     "http://res.cloudinary.com/drql6e2wm/image/upload/v1473561809/14316904_10153842683656304_5376260785447710248_n_eefrun.jpg",
  },
  {
  title: "For Science",
  user_id: 1,
  url:
   "http://res.cloudinary.com/drql6e2wm/image/upload/v1473561809/14322641_10153842783781304_1454675832509839794_n_lc4qsf.jpg",
  },
  {
    title: "Check it out I grow a beard",
    user_id: 1,
    url:
     "http://res.cloudinary.com/drql6e2wm/image/upload/v1473446738/qspmeedkggwhuc3icfqw.jpg",
    x: 189,
    y: 114,
    beardWidth: 115,
    beardHeight: 115,
    icon_url: "b0.png"
  }
])



comments = Comment.create([
  {
    body: "Sick Beard, did you use the Beard me button?",
    user_id: 1,
    photo_id: 1
  },
  {
    body: "wow",
    user_id: 3,
    photo_id: 1
  },
  {
    body: "love it",
    user_id: 3,
    photo_id: 1
  },
  {
    body: "Sick Beard, did you use the Beard me button?",
    user_id: 1,
    photo_id: 2
  },
  {
    body: "wow",
    user_id: 3,
    photo_id: 2
  },
  {
    body: "love it",
    user_id: 3,
    photo_id: 2
  },

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

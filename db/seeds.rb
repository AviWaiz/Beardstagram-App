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
  { username: 'Avinoam', password: '1234567', profile_id: 8},
  { username: 'Guest', password: '12345678', profile_id: 7}
])

photos = Photo.create([
  {
    title: "Roy's Beard",
    user_id: 2,
    url:
     "http://res.cloudinary.com/dxm3d3woc/image/upload/v1473636498/14322537_10153842683461304_1221319818637273910_n_c7bxdj.jpg",
  },
  {
    title: "Business Beard",
    user_id: 2,
    url:
     "http://res.cloudinary.com/dxm3d3woc/image/upload/v1473636495/14238197_10153841467901304_254298978886254322_n_eqiruy.jpg",

  },
  {
    title: "Hipster Beard!!",
    user_id: 2,
    url:
     "http://res.cloudinary.com/dxm3d3woc/image/upload/v1473636495/14264960_10153841466281304_1355392582794354718_n_ktad4c.jpg",

  },
  {
    title: "Five O'clock shadow",
    user_id: 2,
    url:
     "http://res.cloudinary.com/dxm3d3woc/image/upload/v1473636495/14316904_10153842683656304_5376260785447710248_n_n0ldxt.jpg",
  },
  {
  title: "For Science",
  user_id: 2,
  url:
   "http://res.cloudinary.com/dxm3d3woc/image/upload/v1473636495/14322641_10153842783781304_1454675832509839794_n_dlqfu3.jpg",
  },
  {
    title: "Check it out I grew a beard",
    user_id: 1,
    url:
     "http://res.cloudinary.com/dxm3d3woc/image/upload/v1473636534/perfectly-timed-funny-cat-pictures-5_phaopn.jpg",
    x: 189,
    y: 114,
    beardWidth: 115,
    beardHeight: 115,
    icon_url: "b0.png"
  },
  {
    title: "I grew a beard",
    user_id: 2,
    url:
     "http://res.cloudinary.com/dxm3d3woc/image/upload/v1473636534/perfectly-timed-funny-cat-pictures-5_phaopn.jpg",
    x: 189,
    y: 114,
    beardWidth: 115,
    beardHeight: 115,
    icon_url: "b7.png"
  },
  {
    title: "Beard since I was a kid!",
    user_id: 1,
    url:
     "http://res.cloudinary.com/dxm3d3woc/image/upload/v1475721356/xxlrmays76awmlsdltbe.png",
    x: 151,
    y: 174,
    beardWidth: 65,
    beardHeight: 95,
    icon_url: "b14.png"
  }

])



comments = Comment.create([
  {
    body: "Sick Beard, did you use the Beard me button?",
    user_id: 1,
    photo_id: 1
  },
  {
    body: "Sick Beard, did you use the Beard me button?",
    user_id: 1,
    photo_id: 2
  }
])

follows = Follow.create([
  {
    followee_id: 2,
    follower_id: 1
  },
  {
    followee_id: 1,
    follower_id: 2
  }
])

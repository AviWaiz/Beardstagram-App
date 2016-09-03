json.extract! user, :id, :username
json.photos user.photos

user.photos.each do |photo|
  json.comments photo.comments
end

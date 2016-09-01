json.extract! user, :id, :username
json.photos user.photos.pluck(:id)

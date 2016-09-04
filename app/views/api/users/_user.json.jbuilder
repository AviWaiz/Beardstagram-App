json.extract! user, :id, :username

json.following_users user.followees

json.photos do
  json.array!(user.photos) do |photo|
    json.id photo.id
    json.title photo.title
    json.url photo.url
    json.user_id photo.user_id
    json.comments photo.comments
  end
end

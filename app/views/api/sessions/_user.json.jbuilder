#shows current_user

if user

  json.user user

  json.following_users do
    json.array!(user.followees) do |followee|
      json.followee_id followee.id
    end
  end

  json.photos do
    json.array!(user.flatten_photos) do |photo|
      json.id photo.id
      json.title photo.title
      json.url photo.url
      json.user_id photo.user_id
      json.x photo.x
      json.y photo.y
      json.comments photo.comments
    end
  end
end

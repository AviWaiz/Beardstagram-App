#shows current_user

if @user
  json.user do
    json.extract! @user, :username, :id
  end

  json.following_users do
    json.array!(@user.followees) do |user|
      json.followee_id user.id
    end
  end

  json.photos do
    json.array!(@user.flatten_photos) do |photo|
      json.id photo.id
      json.title photo.title
      json.url photo.url
      json.user_id photo.user_id
      json.comments photo.comments
    end
  end
end


if @errors
  json.errors do
    json.array! @errors
  end
end

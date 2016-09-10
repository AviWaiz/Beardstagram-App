#shows current_user

if @user

  json.user @user

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
      json.x photo.x
      json.y photo.y
      json.beardWidth photo.beardWidth
      json.beardHeight photo.beardHeight
      json.icon_url photo.icon_url
      json.created_at photo.created_at
      json.comments do
        json.array!(photo.comments) do |comment|
          json.body comment.body
          json.id comment.id
          json.photo_id comment.photo_id
          json.user_id comment.user_id
          json.username comment.user.username
        end
      end
    end
  end
end


if @errors
  json.errors do
    json.array! @errors
  end
end

json.extract! user, :id, :username

json.profile_pic user.profile_pic

json.following do
  json.array!(user.followees) do |followee|
    json.followee_id followee.id
  end
end

json.followers do
  json.array!(user.followers) do |follower|
    json.follower_id follower.id
  end
end

json.photos do
  json.array!(user.photos) do |photo|
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
        json.created_at comment.created_at
      end
    end
  end
end

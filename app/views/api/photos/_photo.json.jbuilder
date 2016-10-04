json.extract! photo, :id, :title, :user_id, :url, :x, :y, :beardWidth, :beardHeight, :icon_url, :created_at

json.user photo.user
json.user_profile_picture photo.user.profile_pic

json.comments do
  json.partial! 'api/comments/comment', collection: photo.comments, as: :comment
end

json.extract! photo, :id, :title, :user_id, :url, :x, :y, :beardWidth, :beardHeight, :icon_url

json.comments do
  json.partial! 'api/comments/comment', collection: photo.comments, as: :comment
end

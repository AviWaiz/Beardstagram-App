json.extract! photo, :id, :url, :user_id, :title

json.comments do
  json.partial! 'api/comments/comment', collection: photo.comments, as: :comment
end

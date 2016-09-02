json.extract! user, :id, :username

json.photos do
  json.partial! 'api/photos/photo', collection: user.photos, as: :photo
end

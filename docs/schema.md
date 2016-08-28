# Schema Information

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
user_id   | integer   | not null, foreign key (references users), indexed
photo_url   | string   | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
photo_id   | integer   | not null, foreign key (references users), indexed
body      | string    | not null

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id     | integer   | not null, foreign key (references users), indexed
follower_id     | integer   | not null, foreign key (references users), indexed


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

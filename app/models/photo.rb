# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  title       :string
#  user_id     :integer          not null
#  url         :string
#  x           :integer
#  y           :integer
#  beardWidth  :integer
#  beardHeight :integer
#  icon_url    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ActiveRecord::Base
  validates :title, :user_id, :url, presence: true


  belongs_to :user
  has_many :comments
  has_one(
    :user_profile,
    :class_name => 'User',
    :foreign_key => :profile_id,
    :primary_key => :id
  )

  def user_name
    user.username
  end
end

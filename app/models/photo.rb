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
#  icon_url    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ActiveRecord::Base
  validates :title, :user_id, :url, presence: true

  belongs_to :user
  has_many :comments
  
end

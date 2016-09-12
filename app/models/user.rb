# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_id      :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :photos
  has_many :comments

  belongs_to(
    :profile_pic,
    :class_name => 'Photo',
    :foreign_key => :profile_id,
    :primary_key => :id
  )


  has_many :in_follows, class_name: "Follow", foreign_key: "followee_id"
  has_many :out_follows, class_name: "Follow", foreign_key: "follower_id"
  has_many :followers, through: :in_follows, source: :follower
  has_many :followees, through: :out_follows, source: :followee

  def flatten_photos
    self.followees.map do |follower|
      follower.photos
    end.flatten.concat(self.photos).sort_by(&:created_at)
  end
  
  def photos_and_profile
    all_photos = self.photos.map do |photo|
      photo
    end.concat([self.profile_pic]);
    all_photos
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentails(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end
end

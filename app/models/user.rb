class User < ApplicationRecord
  has_many :listings, dependent: :destroy
  has_many :reviews, dependent: :destroy
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end

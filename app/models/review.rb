class Review < ApplicationRecord
  belongs_to :user, optional: true
end

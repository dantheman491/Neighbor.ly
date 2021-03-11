class RemoveUserFromReview < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :user_id, :string
  end
end

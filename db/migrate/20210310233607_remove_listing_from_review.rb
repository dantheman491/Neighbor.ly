class RemoveListingFromReview < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :listing_id, :string
  end
end

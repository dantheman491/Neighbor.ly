class AddDesciptionToListings < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :description, :string
  end
end

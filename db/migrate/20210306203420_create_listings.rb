class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :img_url
      t.string :item_title
      t.integer :price
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

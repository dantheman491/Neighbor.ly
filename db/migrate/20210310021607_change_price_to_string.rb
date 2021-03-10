class ChangePriceToString < ActiveRecord::Migration[6.1]
  def change 
    change_column :listings, :price, :string
  end
end

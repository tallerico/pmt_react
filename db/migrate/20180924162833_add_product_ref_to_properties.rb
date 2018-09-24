class AddProductRefToProperties < ActiveRecord::Migration[5.2]
  def change
    add_reference :properties, :product, foreign_key: true
  end
end

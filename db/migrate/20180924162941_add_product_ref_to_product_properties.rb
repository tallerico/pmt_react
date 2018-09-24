class AddProductRefToProductProperties < ActiveRecord::Migration[5.2]
  def change
    add_reference :product_properties, :product, foreign_key: true
  end
end

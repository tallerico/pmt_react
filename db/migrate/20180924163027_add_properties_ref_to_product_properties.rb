class AddPropertiesRefToProductProperties < ActiveRecord::Migration[5.2]
  def change
    add_reference :product_properties, :property, foreign_key: true
  end
end

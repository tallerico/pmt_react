class CreateProductProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :product_properties do |t|
      t.string :value

      t.timestamps
    end
  end
end

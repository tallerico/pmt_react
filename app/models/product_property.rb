class ProductProperty < ApplicationRecord
  belongs_to :property, required: false
  belongs_to :product, required: false
end

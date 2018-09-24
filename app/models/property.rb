class Property < ApplicationRecord
  belongs_to :product
  has_many :product_properties
end

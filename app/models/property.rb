class Property < ApplicationRecord
  has_many :product_properties
  has_many :products, through: :product_properties
  accepts_nested_attributes_for :product_properties
end

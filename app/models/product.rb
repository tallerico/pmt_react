class Product < ApplicationRecord
  has_many :properties
  has_many :product_properties
end

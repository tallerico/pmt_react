class Product < ApplicationRecord
  validates :name, presence: true, length: { minimum: 3 }
  has_many :product_properties
  has_many :properties, through: :product_properties
end

class Property < ApplicationRecord
  validates :name, presence: true, length: { maximum: 255 }, uniqueness: true
  has_many :product_properties
  has_many :products, through: :product_properties
  accepts_nested_attributes_for :product_properties
end

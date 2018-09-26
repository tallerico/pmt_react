class ProductProperty < ApplicationRecord
  validates :name, presence: true, length: { maximum: 255 }
  belongs_to :property, required: false
  belongs_to :product, required: false
end

class Property < ApplicationRecord
  has_many :product_properties
  has_many :products, through: :product_properties

  accepts_nested_attributes_for :product_properties
end

# product  product_properties property
# 1           (1,2), (1,11)     2
# 2                             5
# 3                             11
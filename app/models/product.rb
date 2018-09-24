class Product < ApplicationRecord
    has_many :propertys, dependent: :destroy
    has_many :product_propertys, dependent: :destroy
end

class Product < ApplicationRecord
    has_many :propertys, dependent: :destroy
end

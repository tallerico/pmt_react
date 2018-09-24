class ProductProperty < ApplicationRecord
    belongs_to :property
    belongs_to :product
end

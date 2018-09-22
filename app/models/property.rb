class Property < ApplicationRecord
    belongs_to :product
    has_one :product_property dependent: :destroy
end

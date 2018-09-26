class Product < ApplicationRecord
  validates :name, presence: true, length: { maximum: 1024 }, uniqueness: true
  validates :upc, presence: true, numericality: { only_integer: true }, :check_for_length, uniqueness: true
  has_many :product_properties
  has_many :properties, through: :product_properties

  def check_for_length
    errors.add(:upc, :wrong_length) unless [10,12,13].include?(upc.length)
  end

end

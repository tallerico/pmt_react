class GetDataController < ApplicationController

  
  def pull
    # @allproduct = Product.includes(:properties, :product_properties).to_a
    products = Product.joins(:properties, :product_properties).map do |product|
      {
        name: product.name,
        upc: product.upc,
        available_on: product.available_on,
        properties: product.product_properties.map do |product_property|
          {
            name: product_property.property.name,
            value: product_property.value
          }
        end
      }
    end.to_json  
    
    render json: products
  end
  

end

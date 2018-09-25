class GetDataController < ApplicationController

  
  def pull
    # @allproduct = Product.includes(:properties, :product_properties).to_a
    @products = Product.joins(:properties, :product_properties)

    all = @products.map do |product|
      {
        name: product.name,
        upc: product.upc,
        available_on: product.available_on,
        properties: product.properties.map do |property|
          {
            name: property.name,
            value: property.product_property.value
          }
        end
      }
    end.to_json  
    
    render json: all
  end
  

end

class GetDataController < ApplicationController

  
  def pull
    # joins associated tables and build json object to be sent to client
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
    # renders json for the client
    render json: products
  end
  

end

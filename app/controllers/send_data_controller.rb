class SendDataController < ApplicationController
    protect_from_forgery with: :null_session

    def save
        product = Product.new(name:params[:name], upc:params[:upc].to_i, available_on:params[:availableon])
        
        # params[:properties].each do |property|
        #     product.product_properties.create(
        #       property_id: Property.find_by(name: property[:name]),
        #       value:       property[:value]
        #     )
        # end

        x=0
        while x < params[:properties].length
            property = product.properties.build(name:params[:properties][x][:name])
            product_property = property.product_properties.build(value:params[:properties][x][:value])
            
            property.save
            product_property.save
            x += 1;
        end
        product.save   
    end    
end

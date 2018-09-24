class SendDataController < ApplicationController
    protect_from_forgery with: :null_session

    def save
        product = Product.create(name:params[:name], upc:params[:upc].to_i, available_on:params[:availableon])
        
        x=0
        while x < params[:properties].length
            property = product.properties.create(name:params[:properties][x][:name])
            property.product_properties.create(value:params[:properties][x][:value])
            
            x += 1;
        end
           
    end    
end

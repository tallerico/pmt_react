class SendDataController < ApplicationController
    protect_from_forgery with: :null_session

    def hi
        product = Product.new
        product.name = params[:name]
        product.upc = params[:upc].to_i
        product.available_on = params[:availableon]
        product.save
        puts params[:properties]
    end    
end

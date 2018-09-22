class SendDataController < ApplicationController
    protect_from_forgery with: :null_session

    def hi
        product = Product.new
        product.name = params[:name]
        product.save
    end    
end

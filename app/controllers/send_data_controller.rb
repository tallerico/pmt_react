class SendDataController < ApplicationController
    protect_from_forgery with: :null_session

    # creating products from params on post
    def save
        p params[:availableon]
        product = Product.new(name:params[:name], upc:params[:upc].to_i, available_on:params[:availableOn])

        Product.transaction do
            product.save!
            
            if product.persisted?
                Property.create!(property_params(product))
            end
        end

    end

    private
    #mapping over property data and associating it with product
    def property_params(product)
        params[:properties]
            .map { |hash| 
                {
                    name: hash['name'],
                    product_properties_attributes: [{value: hash['value'], product_id: product.id}]
                }
            }
    end
end
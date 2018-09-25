class SendDataController < ApplicationController
    protect_from_forgery with: :null_session

    def save
        product = Product.new(name:params[:name], upc:params[:upc].to_i, available_on:params[:availableon])

        Product.transaction do
            product.save!
            
            if product.persisted?
                Property.create!(property_params(product))
            end
        end

    end

    private

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
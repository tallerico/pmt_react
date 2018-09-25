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

        Product.transaction do
            product.save!
            
            if product.persisted?
                Property.create!(property_params(product))
            end
        end

        # x=0
        # while x < params[:properties].length
            
        #     product_property = product.product_properties.build(value:params[:properties][x][:value])
        #     property = product.properties.build(name:params[:properties][x][:name])
        #     property.save
        #     product_property.save
        #     x += 1;
        # end
        # product.save   
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
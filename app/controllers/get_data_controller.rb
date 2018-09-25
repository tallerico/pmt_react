class GetDataController < ApplicationController

  
  def pull
    @allproduct = Product.all
    render json: @allproduct
    p @allproduct
  end
  

end

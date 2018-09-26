Rails.application.routes.draw do
  root 'pages#index'
  match '/', to: 'pages#index', via: :all
  match '/products', to: 'pages#index', via: :all
  match '/send_data' => 'send_data#save', via: :post
  match '/get_data' => 'get_data#pull', via: :get
  match '/search' => 'search#search', via: :get
end

Rails.application.routes.draw do
  root 'pages#index'
  match '/', to: 'pages#index', via: :all
  match '/send_data' => 'send_data#hi', via: :post
end

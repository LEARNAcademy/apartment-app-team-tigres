Rails.application.routes.draw do
  # # resources :apartments
  # devise_for :users
  # #Forces through to React take the json requests
  # resources :apartments, constraints: ->(request){ !request.format.html? }
  # #All html traffic via single page app
  # get '/', to: 'pages#unprotected', constraints: ->(request){ request.format.html? }
  # get '/apartments', to: 'pages#unprotected', constraints: ->(request){ request.format.html? }
  # get '/apartments/*all', to: 'pages#unprotected', constraints: ->(request){ request.format.html? }
  # get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }



  #Forces through to React take the json requests
  devise_for :users
  resources :apartments, constraints: ->(request){ !request.format.html? }
  #All html traffic via single page app
  get '*path', to: 'pages#mainapp', constraints: ->(request){ request.format.html? }
  #Forces you to home page
  root to: 'pages#mainapp'

end

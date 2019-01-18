Rails.application.routes.draw do
  root to: "pages#root"
  namespace :api do 
    namespace :vi do
      post 'search', to: 'pages#search'
      resources :pages do
        collection {post :search}
      end
    end
  end
end

# get '*path', to: 'dash_board#index'
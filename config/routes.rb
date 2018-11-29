Rails.application.routes.draw do
  root to: "pages#root"
  get '*path', to: 'dash_board#index'
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  get '/api/nba_records/teams', to: "api/nba_record#teams"
  get '/api/nba_records/standings', to: "api/nba_record#standings"
end

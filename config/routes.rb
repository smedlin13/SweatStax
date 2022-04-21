Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users, only: :update 
    resources :workouts
  end

  get '*other', to: 'static#index'
end


# needed to include the :users, only: :update in order to show the photo
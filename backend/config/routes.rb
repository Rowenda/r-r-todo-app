Rails.application.routes.draw do
  namespace :api do
    resources :todos, only: [ :index, :show, :create, :destroy ] do
      member do
        patch "update_completed"
      end
    end
  end
end

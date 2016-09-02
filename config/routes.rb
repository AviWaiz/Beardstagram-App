Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :destroy, :show, :index, :update]
    resources :comments, only: [:create, :destroy]
  end

  root 'static_pages#root'
end

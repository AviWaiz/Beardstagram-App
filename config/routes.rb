Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :destroy, :show, :index, :update]
    resources :comments, only: [:create, :destroy]
  end

  root 'static_pages#root'
end

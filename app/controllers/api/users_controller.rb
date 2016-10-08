class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:show]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    if params[:query].present?
      @users = User.where("LOWER(username) ~ ?", params[:query].downcase)
    else
      @users = User.none
    end
    render :index
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      login(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render :show, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def index
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :profile_id)
  end
end

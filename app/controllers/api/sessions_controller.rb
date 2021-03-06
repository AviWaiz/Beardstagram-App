class Api::SessionsController < ApplicationController

  def create
    @user = User.includes(:followees).find_by_credentails(
    params[:user][:username],
    params[:user][:password])

    if @user
      login(@user)
      render :show
    else
      render(
      json: ["Invalid username/password combination"],
      status: 401
      )
    end
  end


  def show
    @user = current_user

    if @user
      render :show
    else
      @errors = nil
      render json: {}, status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
      json: ["Nobody logged in"],
      status: 404
      )
    end
  end

end

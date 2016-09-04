class Api::FollowsController < ApplicationController
  before_action :require_logged_in

  def create
    @follow = Follow.create!({follower_id: current_user.id, followee_id: params[:id]})
    @user = User.find(params[:id])
    render '/api/users/show'
  end

  def destroy
    @follow = Follow.find_by({follower_id: current_user.id, followee_id: params[:id]})
    @follow.destroy!
    @user = User.find(params[:id])
    render 'api/users/show'
  end
end

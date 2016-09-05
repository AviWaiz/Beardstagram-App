class Api::PhotosController < ApplicationController

  def index
    @photos = current_user.flatten_photos
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      @errors = @design.errors.full_messages
      render :show, status: 401
    end
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render :show
    else
      @errors = @design.errors.full_messages
      render :show, status: 401
    end
  end

  def show
    @photo = Photo.includes(comments: :user).find(params[:id])
    render :show
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render :show
  end
  private

  def photo_params
    params.require(:photo).permit(:title, :user_id, :url)
  end
end

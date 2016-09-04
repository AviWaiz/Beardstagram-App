class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      @photo = Photo.includes(comments: :user).find(comment_params[:photo_id])
      render :show
    else
      @errors = @comment.errors.full_messages
      render :show, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
    end
    @photo = Photo.includes(comments: :user).find(@comment.photo_id)
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :photo_id, :user_id)
  end
end

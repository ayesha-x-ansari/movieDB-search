class CommentsController < ApplicationController
  
  before_action :set_comment, only: [:show, :destroy] 

  def index
    render json: Comment.all
  end 

  def create
    @comment= Comment.create(comment_params)
    if @comment.save
      render json: @comment, status: 201
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end 

  def show
    render json: @comment = Comment.find(params[:id]) 
  end 

  def destroy
    @comment.destroy
    render :show, status: :ok
  end 

  private
    def set_comment
      @comment = Comment.find(params[:id])
    end 

    def comment_params
      params.permit(:title, :commentator, :comment)
    end 
    
end 

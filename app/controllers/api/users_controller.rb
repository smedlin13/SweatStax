class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def update
    user = User.find(params[:id])
    user.fname = params[:fname] ? params[:fname] : user.fname
    user.lname = params[:lname] ? params[:lname] : user.lname
    user.username = params[:username] ? params[:username] : user.username
    user.caption = params[:caption] ? params[:caption] : user.caption
    user.email = params[:email] ? params[:email] : user.email
    user.image = params[:image] ? params[:image] : user.image
    user.password = params[:password] ? params[:password] : user.password
    if user.save 
      render json: user 
    else 
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

    file = params[:file]


    if file && file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        user.image = cloud_image['secure_url']
        if user.save
          render json: user
        else
          render json: { errors: user.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      if user.save
        render json: user
      else
        render json: { errors: user.errors.full_messages }, status: 422
      end
    end
  end
  # def add_workouts
  # incoming_workouts = params[:workout_total]
  #     current_user.workout_total = incoming_workouts
  #     if current_user.save 
  #       render json: current_user
  #     else
  #       render json: { errors: current_user.errors }, status: :unprocessable_entity 
  #     end
  #   end

class ImagesController < ApplicationController
  def show
    @image = Image.find(params[:id])
  end

  def new
    @image = Image.new
  end

  def index
    @images = if params.include? :tag
                Image.tagged_with(params[:tag]).order(created_at: :desc)
              else
                Image.order(created_at: :desc)
              end
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      redirect_to @image
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    image = Image.find_by(id: params[:id])
    if image
      image.destroy
    else
      flash[:notice] = 'Image Could Not Be Deleted!'
    end
    redirect_to images_path
  end

  private

  def image_params
    params.require(:image).permit(:url, :text, :tag_list)
  end
end

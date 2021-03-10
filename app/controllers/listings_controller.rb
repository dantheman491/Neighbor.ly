class ListingsController < ApplicationController
  before_action :set_listing, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /listings
  def index
    @listings = Listing.all

    render json: @listings
  end

  # GET /listings/1
  def show
    render json: @listing, include: :reviews
  end

  # POST /listings
  def create
    @listing = Listing.new(listing_params)
    @listing.user = @current_user

    if @listing.save
      render json: @listing, status: :created, location: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /listings/1
  def update
    @listing = @current_user.listings.find(params[:id])
    if @listing.update(listing_params)
      render json: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /listings/1
  def destroy
    @listing = @current_user.listings.find(params[:id])
    @listing.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listing
      @listing = Listing.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def listing_params
      params.require(:listing).permit(:img_url, :item_title, :price)
    end
end

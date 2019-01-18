class Api::V1::PagesController < ActionController::Base
    def search
        render json: Page.get_pages
    end
end
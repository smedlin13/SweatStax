require 'rails/application_controller'

class StaticController < Rails::ApplicationController
  layout false

   def index
     render template: Rails.root.join('public', 'index.html'), status: :not_found
   end
end

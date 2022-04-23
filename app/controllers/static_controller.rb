require 'rails/application_controller'
include ::ActionView::Layouts

class StaticController < ApplicationController
  
  layout false

   def index
     render file: Rails.root.join('public', 'index.html')
   end
end

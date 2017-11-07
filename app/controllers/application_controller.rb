# frozen_string_literal: true

# Base controller. Use to extend whole application
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end

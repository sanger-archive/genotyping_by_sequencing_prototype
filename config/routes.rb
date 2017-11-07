# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  # Route any uncaught browser requests to pages#index as our spa will handle it.
  # We only catch html and non xhr requests to ensure we don't end up serving this
  # page for images or api stuff.
  get '*path', to: 'pages#index', constraints: ->(r) { r.format == :html && !r.xhr? }
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
   scope '/api/v1' do
      get     '/comments',      to:   'comments#index'
      post    '/comments',      to:   'comments#create'
      get     '/comments/:id',  to:   'comments#show'
      delete  '/comments/:id',  to:   'comments#destroy'
  end
end

require 'bundler'
Bundler.require


get '/' do


  erb :hello

end

get '/world' do

  erb :world
end

get '/submit' do
  erb :submit
end

#route to post form
post '/submit_form' do

  #log params to my console
  # SECRET
  # 'params' is a Hash (kvp) built into Sinatra
  p params
  return params.to_json

end

get '/happy' do

  happy_things = Dictionary.new({

    :theworld => 'is awesome'
    })
  return happy_things.to_json
end


  #
  # input = {
  #   :textinput => 'text'
  # }
  #
  # return input.to_json
# end

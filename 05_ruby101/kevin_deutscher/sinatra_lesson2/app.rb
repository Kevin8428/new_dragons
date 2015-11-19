require 'bundler'
Bundler.require


get '/' do


  erb :hello

end

get '/world' do

  erb :world
end
  #
  # input = {
  #   :textinput => 'text'
  # }
  #
  # return input.to_json
# end

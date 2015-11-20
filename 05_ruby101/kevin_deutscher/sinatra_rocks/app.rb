# bundle exec rackup connects to web server
#9292 is the port sinatra uses
#control c kills server
#binding.pry is good to inspect code

#first in ruby we need a Gemfile - in this we need a source and gems
#then build out a config file - config.ru - this is the application configuration and starting point
#need app.rb - this is the actual application

require 'bundler' #require bundler library
Bundler.require #bundler class in library

get '/' do # making get request to server, and code inside responds to it the slash takes us home
  return {
    :message => 'hello, friends.'
  }.to_json
end


get '/hash' do
  sinatras_stuff = {
    :has_pipe => true
  }

  #let us call pry to pry inside the code in the terminal
  #binding.pry
  #this allows us to stop and take over inside the terminal

  #p sinatras_stuff

  return sinatras_stuff.to_json

end

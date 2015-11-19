require 'bundler' #require bundler library
Bundler.require #bundler class in library

get '/' do # making get request to server, and code inside responds to it the slash takes us home
  return {
    :message => 'hello, friends.'
  }.to_json
end

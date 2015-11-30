require "bundler"
Bundler.require

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'popular_things'
)

get '/' do
  return 'this works'
end

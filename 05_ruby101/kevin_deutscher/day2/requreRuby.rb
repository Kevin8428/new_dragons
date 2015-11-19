#create a client

#
# #require some libraries
require 'httparty'
require 'json'
#
# #instantiate a new object called 'fetcher'
fetcher = Object.new
#
# #define new method on fetcher object
# #http://www.omdbapi.com/?t=rocky&y=&plot=short&r=json
def fetcher.get_favorite_movie
  puts HTTParty.get('http://www.omdbapi.com/?t=rocky&y=&plot=short&r=json')

  return HTTParty.get('http://www.omdbapi.com/?t=rocky&y=&plot=short&r=json').to_json
end

fetcher.get_favorite_movie

#
#
#
# def fetcher.convert_hash_to_json(hash)
#
#   #convert a hash to json and return json version
#   return hash.to_json
#
#   # my_hash = hash.to_json
#   # return my_hash
#
# end
#
# test_hash = {
#   :something => 'is awesome',
#   :everything => 'is great',
#   :enjoy => 'every day'
# }

# my_json = fetcher.convert_hash_to_json(test_hash)
# puts my_json

#--------------------------------------


#getters and setters--------
# def fetcher.get_url
#   return @url
# end
#
# def fetcher.set_url(url_to_api)
#
#   #similar to this.url
#   @url = url_to_api
#   return @url
#
# end
#
#
# def fetcher.get_data
#   return HTTParty.get(@url)
#
# end
#
# fetcher.set_url('http://www.omdbapi.com/?t=diehard&y=&plot=short&r=json')
# fetcher.get_data
#





#

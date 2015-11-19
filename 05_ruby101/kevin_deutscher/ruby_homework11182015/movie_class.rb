class Movie

  def initialize(title, url, description)
    @omdb_title = title
    @omdb_url = url
    @omdb_description = description
  end

  def set_url(url)
    @omdb_url = url
  end

  def get_url
    return @omdb_url
  end

  require 'httparty'
  require 'json'

  fetch_movie = Object.new

  def fetch_movie.get_movie_title
      # puts HTTParty.get(data)
      # return HTTParty.get(data).to_json ---------CANT PASS URL THRU METHOD

      puts HTTParty.get('http://www.omdbapi.com/?t=speed&y=&plot=short&r=json')
      return HTTParty.get('http://www.omdbapi.com/?t=speed&y=&plot=short&r=json').to_json
  end

  fetch_movie.get_movie_title



end

movie_one = Movie.new('diehard', 'http://www.omdbapi.com/?t=speed&y=&plot=short&r=json', 'action')
# p movie_one.get_url






#------

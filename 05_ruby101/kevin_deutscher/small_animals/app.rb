require 'bundler'
Bundler.require


get '/' do

  home = {
    :name => 'kevin',
    :message => 'this works'
  }
  return home.to_json
end

get '/test' do

  erb :json_test

end



get '/kitten' do
  kitten = {
  :name => 'kitty_cat',
  :cuteness => 5,
  :habitat => 'house',
  :picture_url => 'http://dreamatico.com/data_images/kitten/kitten-2.jpg',
  :description => 'fluffy'
}
  return kitten.to_json
end

get '/puppy' do
  puppy = {
  :name => 'puppy_pup',
  :cuteness => 9,
  :habitat => 'neighborhood',
  :picture_url => 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg',
  :description => 'awesome'
}
return puppy.to_json
end

get '/frog' do
  frog = {
  :name => 'mr frog',
  :cuteness => 3,
  :habitat => 'pond',
  :picture_url => 'http://animalia-life.com/image.php?pic=/data_images/frog/frog6.jpg',
  :description => 'slimey'
}
return frog.to_json
end

get '/mouse' do
  mouse = {
  :name => 'mr mouse',
  :cuteness => 7,
  :habitat => 'fields',
  :picture_url => 'http://cdn.orkin.com/images/rodents/deer-mouse-illustration_360x244.jpg',
  :description => 'hairy'
}
return mouse.to_json
end

get '/hamster' do
  hamster = {
  :name => 'mr hamster',
  :cuteness => 7,
  :habitat => 'fields',
  :picture_url => 'http://vignette3.wikia.nocookie.net/animalcrossing/images/4/49/Tumblr_lvrcmvCpsS1qbeyouo1_500.jpg/revision/latest?cb=20130325185045',
  :description => 'rodent'
}
return hamster.to_json
end

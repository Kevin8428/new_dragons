require "bundler"
Bundler.require

# connect to database
# calling library active record and Base class

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'popular_things'
)


# takes database info and returns as json
get '/' do
  return Things.all.to_json
end

get '/create' do
  new_thing = Things.new #creating a new thing
  new_thing.name = Faker::Hacker.say_something_smart
  # update the name column/attribute
  new_thing.save

  new_thing2 = Things.new
  new_thing2.name = Faker::Business.credit_card_number
  new_thing2.save

  return Things.all.to_json
end

get '/update' do
  first_thing = Things.find(1)
  first_thing.name = Faker::App.name
  first_thing.save

  second_thing = Things.find(2)
  second_thing.name = Faker::App.name
  second_thing.save

  third_thing = Things.find(3)
  third_thing.name = Faker::App.name
  third_thing.save

  updateArray = Array.new

  updateArray.push(first_thing, second_thing, third_thing)

  return updateArray.to_json
  # return first_thing.to_json
end

get '/destroy' do
  # first = Things.find(1)
  # first.destroy

  puts '-------------'
  p Things.all
  puts '-------------'

  all_the_things = Things.all
  all_the_things.each do |something|
    something.destroy
  end

  return Things.all.to_json
end

get '/find' do
  something = Things.find(1) #find row with ID of one
  something_else = Things.find(2)
  third_something = Things.find(3)
  array_of_things = Array.new

  # for i in 0..3
  #   something_loop = Things.find(i)
  #   array_of_things.push(something_loop)
  # end



  array_of_things.push(something, something_else, third_something)
  #
  return array_of_things.to_json
  # return something.to_json
end

# find, ie read

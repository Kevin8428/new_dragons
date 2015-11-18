#blank = []

#blank = [Array.new]

num = Array(1..10)
p num

letters = Array("a".."z")
p letters

blank = []
blank.push("carrot", "apple", "orange","pear")
p blank

# This is shoveling
# you can shovel multiple things

blank<<"whoa"<<"hey"
p blank

# Ruby methods

teachers = ["james", "jim", "adriana"]
p teachers.last

# pull a random sample from an Array

p teachers.sample

#
# Let's generate some random town names for a Tycoon-style video-game. We can do this by combining the following generic name fragments:
# Starts: Bed, Brunn, Dun, Far, Glen, Tarn
# Middles: ding, fing, ly, ston
# Ends: borough, burg, ditch, hall, pool, ville, way, worth

fragments = []

p fragments.sample



town_names = ["bed", "brun", "Dun", "far", "glen", "tar"]
p town_names.sample












#reverses items in the array

p teachers.reverse

# pop removes the last item in an array
p teachers.pop

# to remove a certain index
 teachers.delete_at(0)
 p teachers

 p teachers.index("jim")

 p teachers.insert(0, "james")
 p teachers.length
 #lists number of items in array
 p teachers.count
 # can pass in a block if you want to (why this is different than length)
 #p teachers.count{[name]name == "james"}

 p [1,2,3].count{|x| x>2}


 # lists out each item in an array



 # Each statements

 teachers.each do |teacher|
   p teacher

 end
 teachers.each{|teacher| p teacher.upcase}

 teachers.map{|teacher| p teacher.upcase}
 # map turns the items into an array

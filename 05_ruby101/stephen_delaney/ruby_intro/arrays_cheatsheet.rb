# # To make a new array, blank = Array.new OR just blank = []
#
# num = Array(1..10)
# p num      #If you do puts, it will return them each on their own line.
#
# letters = Array('A'..'Z')
# p letters


# blank = []
# blank.push('Hey', 'Hello')
# p blank
# blank << "Howdy"       # This is called shoveling. It goes in as the last item. Can only do one at a time.
# blank << "Hi" << "Hola"  # This DOES work, but do not do it. Not recommended.
# p blank


teachers = ['James', 'Jim', 'Adriana']
# p teachers.first
# p teachers[1]
# p teachers.last
# p teachers.sample         # Pulls a random item from the array (does not change array)
# p teachers.sample(2)     # () tells it how many to choose
# p teachers.reverse      #Returns the reverse value, but does not actually change the array
# p teachers.pop          # removes the last item of the array
# p teachers.delete_at(0)
# p teachers.push('Stephen')   #Adds to the end of the array
# p teachers.index('Jim')     #Gives index
# p teachers.insert(0, 'Stephen')  #Insert item at certain position
# p teachers.length
# p teachers.count
# p teachers.count{|inc| inc == 'Jim'} #can count how many times Jim appears. "Inc" can be called anything
          # p [1,2,3,4,5,6].count{|x| x > 2}
# teachers.each{|inc| p inc}

# teachers.each do |inc|
#   p inc
# end

# # OR DO IN ONE LINE
# teachers.each{|inc| p inc}

p teachers.map{|inc| p inc.upcase}   #map returns a temporary new array, each does not.
p teachers
# p teachers.each{|inc| p inc.upcase}


# teachers.map!{|inc| p inc.upcase}   # the addition of the ! is a disruptor -- it actually changes the array
# p teachers

# teachers.count do |inc|   # returns true, false, false
#   p inc == "James"
# end




# #BELOW is how to get the incrementor in the loop
#                       for inc in teachers
#                         p inc
#                         p teachers.index(inc)
#                         end

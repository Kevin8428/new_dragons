# blank = []
# blank = Array.new

# num = Array(1..10)
# p num
#
# letters = Array("a".."z")
# p letters

# blank = []
# blank.push("carrot","apple","banana","horse","another horse")
# p blank
# blank << "whoa"<<"a third horse" # Don't do this. It is ugly
# p blank

teachers = ["James", "Adriana", "The other James who goes by Jim"]
# p teachers.first
# p teachers.last
# p teachers.sample(2)
# teachers.reverse # Reverses array but doesn't change original
# teachers.reverse! # Reverses array and does change original
# p teachers.pop # Pops the last item of array and changes original
# p teachers.delete_at(0)
# p teachers
# p teachers.index("Adriana")
# p teachers.insert(0, "Bill Nye") # inserts at that position and shifts the remaining values in array
# p teachers.length # Returns length of Array
# p teachers.count{|name|name=="James"} # Accepts block and counts amount of times it occurs in the array
# p [1,2,3].count{|x|x>2}

# teachers.each{|teacher|p teacher} # Goes through each index of array and prints out that item
# teachers.each do|teacher| # Same thing as above but different syntax
#   p teacher               # Recommended when you have a lot of stuff to do
# end

# teachers.map{|teacher|p teacher} # Maps changes on each item in array. Like .each but it actually changes it
# Ex:
teachers.each{|teacher|p teacher.upcase}
p teachers
people = teachers.map{|teacher|p teacher.upcase}
p people

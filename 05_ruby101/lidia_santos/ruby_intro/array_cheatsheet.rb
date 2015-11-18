### all the arrays!

# blank = []
# or
# blank = Array.new

# p lists them as a group
# puts lists them individually

# num  = Array(1..10)
# p num
#
# letters = Array("a".."z")
# puts letters



# << is called shoveling, it adds whatever comes after it to end of array
# blank = []
# blank.push("carrot", "apple", "banana")
# p blank
# blank<<"whoa"
# p blank

###array methods!####

teachers = ["James", "Jim", "Adriana"]

teachers.count do |teacher|
  p teacher  == "James"
end

# teachers.each{|teacher| p teacher.upcase}
# p teachers
# teachers.map{|teacher| p teacher.upcase}
# p teachers

##### to assign a new variable to a map
# people = teachers.map{|teacher| p teacher.upcase}
# p people





 #map is making a clone of the array which is different than ex 1 & 2
# ex 1
# teachers.each{|teacher| p teacher}

# ex 2
# teachers.each do |teacher|
#   p teacher
# end

# ex 1 & 2 do the same thing, just different syntax





# p teachers.first
# p teachers.last
# p teachers.reverse (reverses it)
# p teachers.reverse! (reverses, changes it completely)
# p teachers.sample
# method .sample pulls random items from the array, everytime, you can specify bye adding .sample(#) ()# index of item in array)
# p teachers.reverse #(reverses array)
# p teachers.pop #(removes last item)
# teachers.delete_at(0) #removes whatver index you put in
# p teachers
# p teachers.index("Jim") #tells you what index it is
# p teachers.insert(0, "James")
# p teachers.length #gives you the length of the array
# p teachers.count{|name| name == "James"} # igves you the length of the array but also accepts the nlock by usings {}
# p[1,2,3].count{|x| x>2}  ## this no work, why??????

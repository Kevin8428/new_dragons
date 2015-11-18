teachers = ["james","jim","adriana"]
# teachers.each{|teacher| p teacher}

# teachers.each do |teacher| # this does same as teachers.each{|teacher| p teacher} -- 3 line method is better for many interations
#   p teacher
# end

teachers.each{|teacher| p teacher.upcase}#.each doesn't affect original
# p teachers
teachers.map{|teacher| p teacher.upcase} # this makes a clone of the array
# doing .map! WILL CHANGE ORIGINAL ARRAY, ALSO KNOWN AS A DESTRUCTIVE
# p teachers
#people = teachers.map{|teacher| p teacher.upcase} # this makes a clone of the array



# p teachers.first
# p teachers.last
# p teachers.sample(2) # pulls a random from the array
# p teachers
# p teachers.reverse
# p teachers
# p teachers.pop # removes last from array
# teachers.delete_at(0) # remove from index
# p teachers
# p teachers.index("jim")
# p teachers.insert(0,"james")
# teachers.delete>at(0)
# p teachers.length
# p teachers.count{|anything|anything =="james"}
# p [1,2,3].count{|x| x >2}











# blank = Array.new --this method works too
# blank = []

# num = Array(1..10)
# p num
#
#
# letters = Array("a".."z")
# p letters
#


# blank = []
# blank.push("carrot","test2","test3")
# p blank
# blank <<"whoa"#this is called shoveling
# p blank
# blank <<"test4"<<"test5" # bad practice to shovel multiple
# p blank

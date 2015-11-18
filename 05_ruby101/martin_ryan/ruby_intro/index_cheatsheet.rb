# blank = Array.new
# blank = []

# num = Array(1..10)
# p num
#
# letters = Array("a".."z")
# p letters

teachers = ["james","me","bla"]
# teachers.each{|teacher| p teacher}
# teachers.each do |teacher|
#   p teacher
# end
# teachers.map{|teacher| p teacher}
# teachers.map!{|teacher| p teacher}

# newTeachers = teachers.each{|teacher| p teacher.upcase}
# p teachers
# p newTeachers # doesnt work because each doesnt effect array


# newTeachers = teachers.map{|teacher| p teacher.upcase}
# p teachers
# p newTeachers

# p teachers.first #outputs string with quotes
# puts teachers.last #outputs with no quotes
# p teachers.sample(2)
# p teachers.reverse
# p teachers.pop
# teachers.delete_at(0)
# p teachers.index("james")
# p teachers.insert(0,"james")
# p teachers.length
# p teachers.count
# p teachers.count{|name| name == "me"}
# p [1,2,3].count{|x| x > 0}

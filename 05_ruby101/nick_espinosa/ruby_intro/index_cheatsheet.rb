# # blank = []
# num = Array(1..10)
# p num
#
# letters = Array("a".."z")
# puts letters
# blank = []
# blank.push("carrot","apple","banana")
# p blank
# blank << "whoa"
# p blank
teachers = ["james","jim","adriana"]
# teachers.each{|teacher| p teacher} #each does not create new array
# teachers.each do |teacher|
#   p teacher
# end
# teachers.map{|teacher| p teacher.upcase} #map creates new array
# p teachers
teachers.each{|teacher| p teacher.upcase}
p teachers
# teachers.count do |teacher|
#   p teacher == "james"
# end
p teachers.count{|teacher| teacher == "James"}
# p teachers.first
# p teachers.last
# p teachers.sample
# p teachers.reverse! -- ! changes whole array
# p teachers.pop
# teachers.delete_at(0)
# p teachers.index("jim")
# p teachers.insert(0, "James")
# p teachers.length
# p teachers.count{|name| name == "james"}
# p [1,2,3].count{|x| x>2 }

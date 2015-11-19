blank = []
blank = Array.new

num=Array(1..10)
p num

lettrs = Array("a".."z")
p letters
print letters
puts letters


blank = []
blank.push("carrot")
blank.push("apples", "banana", "monkey")
blank << "whooa"  #shoveling "whoa"
p blank

crapper = Array.new
crapper << "shit"

teachers = ["James", "Jim", "Adrianna"]
p teachers.first
p teachers.last
p teachers.sample
p teachers.shuffle
p teachers
p teachers.pop
p teachers.delete_at(0)
p teachers
p teachers.index("Jim")
p teachers.length
p teachers.count{|name| name == "James"}
p[1,2,3].count{|x| x>2 }
p[1,2,3].count{|x| x!="Jim" } #does this work?


teachers = ["James", "Jim", "Adrianna"]
teachers.each{|teacher| p teacher} #like a for each loop!

teacher.each do |teacher| #does the same thing!
  p teacher
end


teachers = ["James", "Jim", "Adrianna"]
teachers.each{|teacher| p teacher} #like a for each loop!
u_teachers = []
u_teachers = teachers.map{|teacher| p teacher.upcase}
p teachers
p u_teachers


teachers = ["James", "Jim", "Adrianna"]
teachers.each{|teacher| p teacher} #like a for each loop!
u_teachers = []
u_teachers = teachers.map!{|teacher| p teacher.upcase}
p teachers
p u_teachers


teachers = ["James", "Jim", "Adrianna"]
teachers.count do |teacher|
  p teacher == "James"
end

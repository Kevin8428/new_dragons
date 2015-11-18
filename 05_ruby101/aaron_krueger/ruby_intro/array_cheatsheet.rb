# blank = Array.new
# blank = []

# nums = Array(1..10)
# letters = Array("a".."z")
# p letters

blank =[]
blank.push("carrot")
p blank
blank << "lotion"
p blank

teachers = ["James", "Jim", "Adriana"]
p teachers.first
p teachers.last
p teachers.sample(2)
p teachers.reverse
p teachers
#p teachers.delete_at(2)
p teachers.index("James")
teachers.insert(3,"boom")
p teachers
p teachers.length
p teachers.count
p [1,2,3,100].count{|x| x>2}
teachers.each{|teacher| p teacher}
teachers.map{|teacher| p teacher}

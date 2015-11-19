# blank = []
# blank = Array.new

num = Array(1..10)
letters = Array('a'..'z')
print num, letters

blank = []
blank.push('carrot', 'apple', 'banana')
p blank
blank << "whoa" << 'wut' #shoveling
p blank


teachers = ['James', 'Adriana', 'Jim']

# p teachers.first
# p teachers.last
# p teachers.sample(2)
# p teachers.index('Jim')
# p teachers.insert(0, 'James')
# p teachers.reverse #Does not change the original array
# p teachers.pop
# p teachers.delete_at(0)
# p teachers.length
# #p teachers.count{|name| name == "james"}
# p teachers

# teachers.each{|teacher| p teacher}
# teachers.each do |teacher|
#   p teacher
# end

teachers.map{|teacher| p teacher.upcase} # Makes a new array from original

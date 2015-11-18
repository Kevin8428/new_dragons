# blank = []
# or
# blank = Array.new

# num = Array(1..10)
# p num

# blank = []
# blank.push("carrot")
# p blank
# blank << "whoa"
# p blank
# blank.push("apple","banana")
# p blank

teachers = ["James","Jim","Adriana"]
p teachers.first
p teachers.last
# .sample pulls one random value in  the array
p teachers.sample
# .sample can take argument of number of random items to print
p teachers.sample(2)
# .reverse = reverses array
p teachers.reverse
# .pop removes last item of array
p teachers.pop
p teachers.push("Adriana")
p teachers.delete_at(0)
p teachers.index("Jim")
p teachers.insert(1,"Sam")
p teachers.delete_at(1);
p teachers.length
p teachers.count{|name| name == "James"}
p [1,2,3].count{|x|x>2}
teachers.each{|teacher|p teacher}
teachers.each do |teacher|
  p teacher
end
teachers.map{|teacher| p teacher.upcase}

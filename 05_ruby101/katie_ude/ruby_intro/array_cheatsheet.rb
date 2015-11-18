# creating a new/empty array
# blank = []
# blank = Array.new

# num=Array(1..10)
# puts num
# # puts places items (numbers in this case) into a single variable list
#
# letters = Array("a".."z")
# p letters

# blank = []
# blank.push("carrot", "apple", "banana")
# p blank
# blank << "whoa"
# p blank

teachers = ["James", "Jim", "Adriana"]
teachers.each{|teacher| p teacher.upcase}
teachers.each do |teacher|
  p teacher.upcase
end

teachers.map{|teacher|p teacher}

# p teachers.first
# p teachers.last
# # .sample will pull one random sample from an array & sample with a number after it ex:(3) will pull 3 random samples out of the array
# p teachers.sample(2)
# .reverse will reverse/flip the list within the array
# .reverse! will permanently reverse/flip the list in the array
# p teachers.reverse
# p teachers.pop
# teachers.delete_at(0)
# p teachers
# # return index of array
# p teachers.index("Jim")
# p teachers.insert(0, "Sally")
#
# p teachers.length
# p teachers.count{|name| name == "James"}
# p [1,2,3].count{|x|x>2}

# array cheatsheet
# blank = []
# blank = Array.new

# num = Array(1..10)

# letters = Array('a'..'z')

# p = print
# puts = print on new lines

# blank = []
# blank.push("carrot")
# p blank

# blank << "whoa" is the same as blank.push("whoa")

# blank = []
# blank.push("carrot", "apple", "banana")

teachers = ["James", "Jim", "Adriana"]

# puts teachers.first
# puts teachers.last
# puts teachers.sample
#
# teachers.reverse
# puts teachers.reverse
# add an "!" at the end to permanently reverse the array

# puts teachers.pop
# puts teachers
# teachers << "Adriana"
# puts teachers

# puts teachers.index("James")
# teachers.delete_at(0)
# puts teachers
# teachers.insert(0, "James")
# puts teachers

# puts teachers.shift()
# puts teachers.unshift("James")

# puts teachers.length
# puts teachers.count{|name| name == "James"}

# puts [1, 2, 3].count{|x| x > 2}

# teachers.each{|teacher| puts teacher} # same as...
# teachers.each do |teacher|
#   puts teacher
# end

# teachers.map{|teacher| puts teacher}

# puts teachers.map{|teacher| puts teacher.upcase}
# puts teachers

# teachers.map{|teacher| puts teacher.upcase}
# peeps = teachers.map{|teacher| teacher.upcase}
# puts peeps

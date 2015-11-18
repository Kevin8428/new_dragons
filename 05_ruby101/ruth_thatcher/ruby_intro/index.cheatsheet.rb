teachers = ['james', 'jim', 'adriana']
#teachers.each{|teacher| p teacher}
teachers.each do |teacher| # does same thing as above; better if doing alot of things
  p teacher
end
teachers.each{|teacher|p teacher.upcase}
p teachers
teachers.map{|teacher|p teacher.upcase}
p people
 teachers.count{|teacher|
  p teacher == 'james'
}
# end






# p teachers.first
# p teachers.last
#p teachers.sample(2) #sample randomly selects!
#p teachers.reverse! # ! makes the reversal permanent
# p teachers.index('jim')
# teachers.delete_at(0)
# p teachers.insert(0, 'james')
#p teachers.pop
#p teachers.length
#p teachers.count{|name| name == 'james'} #name in blue gives index placeholder
#p [1,2,3].count{|x|x>2}




# blank = []
# blank = Array.new

# num = Array(1..10)
# p num

# letters = Array('a'..'z')
# p letters

# blank =[]
# blank.push('carrot')
# p blank
# blank <<'whoa' # same thing as push!
# p blank

# blank= []
# blank.push('carrot', "apple", "banana")
# p blank
# blank << 'dont do that!'
# p blank

# blank = []
# other_blank = Array.new
#
# num = Array(1..10)
# p num
#
# letters = Array('a'..'z')
# puts letters

def some_array_methods
  teachers = ['James', 'Jim', 'Adriana']
  # p teachers.first
  # p teachers.last
  # p teachers.sample
  # reverse_teachers = teachers.reverse
  # teachers.delete_at(0)
  # p teachers.index('aldskjflskdjf')
  teachers.insert(0 , 'Angie')
  # p teachers.count do |name|
  #   name == 'Jim'
  # end
  # p teachers.length
  # p teachers
  # teachers.each do |teacher|
  #   p teacher
  # end
  new_teachers = teachers.map do |teacher|
    teacher += ' is a teacher.'
  end
  p new_teachers
end
some_array_methods

def add_an_item
  blank = []
  blank.push('carrot', 'apple', 'grape', 'pear', 'pizza rolls')
  blank << 'whoa'
  p blank
end
# add_an_item

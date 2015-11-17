# def add
#   puts 2 + 2
# end
#
# add

# def add_two(num)
#   puts num + 2
# end
#
# add_two(6)

# def add(a, b)
#   puts a + b
# end
#
# add(4, 12312)

array = [2, 5, 3, 6, 8, 10, 32]

def greater_than_two(array)
  array.each do |number|
    if number > 2
      puts number
    end
  end
end

greater_than_two(array)

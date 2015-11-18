
# def add_two(num, num2)
#   p num + num2
# end

# add_two(3, 5)

#take an array of numbers and return numbers if they are greater than 2

nums= [1, 2,  4, 5]
greater_than_5(nums)

def greater_than_5(array)
 array.each do |num|
 if num > 2
  p num
  end
end
end

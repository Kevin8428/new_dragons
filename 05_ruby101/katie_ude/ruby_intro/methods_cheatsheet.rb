def add_two(num, num2)
  p num + 2 + num2
end

add_two(12, 3)

# Create an array of numbers and return numbers if they are greater than 2
numbers = Array.new
numbers.push(12, 7, 9, 1, 6, 0)
 for value in numbers
  p value if value > 2
end

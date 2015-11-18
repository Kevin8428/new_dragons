
def add x, y = 2
 p x + y
end
add 2
add 2, 5

some_numbers = [18, 36, 4, 0, -18, 55, 68, 2]
def greater_than_two nums
  nums.each do |num|
    if num > 2
      p num
    end
  end
end
greater_than_two some_numbers

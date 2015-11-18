def add_two(num)
  p num +2
end

add_two(9)


def add_two(num1, num2)
  p num1 + num2
end

def add_two(num1 = 2, num2=5)
  p num1 + num2
end

add_two(5,9)

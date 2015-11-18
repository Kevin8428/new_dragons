# Methods

# def add # Not accepting arguments
#   p 2 + 2
# end
# add # Calls method
#
# def add_two(num) # Accepts arguments
#   p num + 2
# end
# add_two(4)
#
# def add_multiple(num1, num2)
#   p num1 + num2
# end
# add_multiple(6,89)

bigarray = Array(1..100)

def return_prime(numarray)
  p numarray
  p numarray.count{|z|z%2==0}
end

return_prime(bigarray)

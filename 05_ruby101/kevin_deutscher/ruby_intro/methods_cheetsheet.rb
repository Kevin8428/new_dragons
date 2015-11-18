# def add_two(num, num2)
#   p num + num2
# end
#
# add_two(3,5)



##method take in array of numbers and return numbers >2
testArray = [1,2,3,4,5,6]
def test_method(anything)
  for i in anything
  p i if i >2
  end
end

test_method(testArray)


# p [1,2,3].map{|x| x >2}
#
#
# animals=["dogs","wolves"]
# for x in animals
#   p x
#   p animals.length
# end

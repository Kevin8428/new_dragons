# method takes in array and returns any great thean 2
array = [1,2,3,4,5,6,7,8,9,10]

def overTwo(x)
   x.count{ |a| a >= 9}
end

array.pop
array.reverse!
p array
p overTwo(array) # calling method and printing return



# def add_two(num = 1, num2 = 2)
#    p num +2
# end
#
# add_two(10)

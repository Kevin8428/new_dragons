# def add(x, y)
#   p x + y
# end
# add(2,4)




# take in an array of numbers and returns numbers if they are greater than 2
nums =[1,2,3,4,5,6,7,8,9,10]

def greater_than_5(array)
  array.each do |num|
    if num > 2
      p num
    end
  end
end

greater_than_5(nums)

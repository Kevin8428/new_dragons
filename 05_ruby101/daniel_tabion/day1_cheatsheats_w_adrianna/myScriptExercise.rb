# take in an array of numbers and return numbers if they are greater than 2

array = [1,5,2,4,9,0,-1]

def greater_than_2(array)
  array.each do |num|
    if num > 2
      p num
    end
  end
end

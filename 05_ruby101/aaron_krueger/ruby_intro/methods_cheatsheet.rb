# 
# def sum (num)
#   p num + 2
# end
#
# sum(2)
#
# def pathTheo (a, b)
#   p a**2+b**2
# end
#
# pathTheo(3, 4)

numArr = [1,2,3,4,5,6,7,8,9]


def greaterThan5(array)
  array.each do |nums|
    p nums if nums > 2
  end
end
greaterThan5(numArr)

# def add_two(num, num2)
#   p (num) + num2
# end
#
# add_two(1,2)

def gt_two(arr)
  arr.each{|i| if i > 2
    p i
  end}
end

gt_two(1..10)

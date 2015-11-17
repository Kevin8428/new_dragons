# def prime(num)
#   i = 2
#   if num % i == 0 && i != num
#     return false
#   else
#     return true
#   end
# end
#
# puts prime(2)
# puts prime(13)
# puts prime(1)
# puts prime(14)
# puts prime(7)
# puts prime(16)

def town_names(num = 3)
  starts = ["Bed", "Brunn", "Dun", "far", "Glen", "Tarn"]
  middles = ["ding", "fing", "ly", "ston"]
  ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
  names = []
  num.times do
    town = starts.sample + middles.sample + ends.sample
    names.push(town)
  end
  return names
end

puts town_names(5)

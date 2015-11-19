def prime(num)
  test = Array(2..Math.sqrt(num).round)
  test.each do |number|
    if num % number == 0 && number != num
      return false
    end
  end
  return true
end

puts prime(2)
puts prime(13)
puts prime(1)
puts prime(14)
puts prime(7)
puts prime(16)

#-------------------------------------------------------------------------------

def town_names(num = 3, stipulation)
  starts = ["Bed", "Brunn", "Dun", "far", "Glen", "Tarn"]
  middles = ["ding", "fing", "ly", "ston"]
  ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
  waters = ["on-the-sea", "Falls"]
  names = []
  num.times do
    if stipulation == "short_name"
      town = starts.sample + ends.sample
    elsif stipulation == "near_water"
      town = starts.sample + middles.sample + ends.sample + " " + waters.sample
    else
      town = starts.sample + middles.sample + ends.sample
    end
    names.push(town)
  end
  return names
end

puts town_names(5, "short_name")

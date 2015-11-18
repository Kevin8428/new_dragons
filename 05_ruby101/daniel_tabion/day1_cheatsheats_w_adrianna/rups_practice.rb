#ROUND 1
#Write a method called prime? that takes a single parameter called number and returns true if the parameter is a prime number, or false otherwise.
#Use the Math.sqrt

def prime(number)
  num = 2.0
  # p Math.sqrt(number)
  until num > Math.sqrt(number)
  # until num > Math.sqrt(number)
    # p num
    # p number.remainder(num)
      if (number.remainder(num)) == 0
      return false
    end
    num=num+1;
  end
  return true
end

p prime(6)
p prime(8)
p prime(7)
p prime(9)
p prime(13)


#
# #ROUND 2.1
# Starts = [ "Bed", "Brunn", "Dun", "Far", "Glen", "Tarn" ]
# Middles = [ "ding" , "fing", "ly", "ston" ]
# Ends = [ "borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
#
# def town_names(num=3)
#   towns=[]
#   n=0
#   while n<num
#     towns.push(Starts.sample + Middles.sample + Ends.sample)
#     n=n+1
#   end
#   return towns
# end
#
# p town_names()
# p town_names(6)
#
# #ROUND 2.2
# Starts = [ "Bed", "Brunn", "Dun", "Far", "Glen", "Tarn" ]
# Middles = [ "ding" , "fing", "ly", "ston" ]
# Ends = [ "borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
# Water_tags = ["-on-sea", " Falls"]
# Land_tags = [" Hill", " Burrow", " Meadows"]
#
# def town_names(num=3, option="near_water")
#   n = 0
#   towns = []
#   while n < num
#     newTown = ""
#     newTown = Starts.sample + Middles.sample + Ends.sample
#     if option == "near_water"
#       newTown = newTown + Water_tags.sample
#     elsif option == "on_land"
#       newTown = newTown + Land_tags.sample
#     end
#     towns.push(newTown)
#     n += 1
#   end
#   return towns
# end
#
# p town_names()
# p town_names(6)
# p town_names(4, "near_water")
# p town_names(5, "on_land")



#ROUND 2.3
Starts = [ "Bed", "Brunn", "Dun", "Far", "Glen", "Tarn" ]
Middles = [ "ding" , "fing", "ly", "ston" ]
Ends = [ "borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
Water_tags = ["-on-sea", " Falls"]
Land_tags = [" Hill", " Burrow", " Meadows"]

def town_names(num=3, option="near_water")
  n = 0
  towns = []
  if option == "short_name"
    while n<num
      towns.push(Starts.sample + Middles.sample + Ends.sample)
      n=n+1
    end
    return towns
  end

  while n < num
    newTown = ""
    newTown = Starts.sample + Middles.sample + Ends.sample
    if option == "near_water"
      newTown = newTown + Water_tags.sample
    elsif option == "on_land"
      newTown = newTown + Land_tags.sample
    end
      towns.push(newTown)
      n += 1
  end
  return towns

end

p town_names()
p town_names(6)
p town_names(4, "near_water")
p town_names(5, "on_land")
p town_names(4, "short_name")

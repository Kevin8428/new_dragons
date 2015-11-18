# Round 1: Prime Time
#
# Write a method called prime? that takes a single parameter called number and returns true if the parameter is a prime number, or false otherwise.
# Use the Math.sqrt ...

def prime?(number)

  numSqrt = Math.sqrt(number).floor
  #p numSqrt
  for num in 2..numSqrt
    if number % num == 0 then
      puts false
      return false
    end
  end
  puts true
  return true

end

p prime?(5)
p prime?(10)





# Round 2: Fardingworth Falls
#
# Let's generate some random town names for a Tycoon-style video-game. We can do this by combining the following generic name fragments:
# Starts: Bed, Brunn, Dun, Far, Glen, Tarn
# Middles: ding, fing, ly, ston
# Ends: borough, burg, ditch, hall, pool, ville, way, worth
# Step 1
#
# Write a method called town_names that randomly generates a number of town names by combining one Start, one Middle, and one End. Calling town_names(5) should give an array of 5 town names. If just town_names is called, generate 3 names.
# Step 2
#
# Modify the method so that calling town_names(3, 'near_water') will randomly add either "-on-sea" or " Falls" to each of the names. Optionally, think of another value that the second argument could have, and add appropriate random suffixes or prefixes when it is provided.
# Step 3
#
# Modify the method so that calling town_names(3, 'short_name') will always generate names without a Middle.

starts = ["Bed","Brunn", "Dun", "Far", "Glen", "Tarn"]
middles = ["ding", "fing", "ly", "ston"]
ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]

def town_names(numOfTowns = 3, suffOrPref = "none")
  townNames = []
  starts = ["Bed","Brunn", "Dun", "Far", "Glen", "Tarn"]
  middles = ["ding", "fing", "ly", "ston"]
  ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
  near_waters = ["-on-sea"," Falls"]
  prefixes = ["Land of ","Kingdom of ","Empire of "]

  numOfTowns.times do |sampleNum|
    case suffOrPref
    when "none"
      townNames.push(starts.sample + middles.sample + ends.sample)
    when "near_water"
      townNames.push(starts.sample + middles.sample + ends.sample + near_waters.sample)
    when "prefix"
      townNames.push(prefixes.sample + starts.sample + middles.sample + ends.sample)
    when "short_name"
      townNames.push(starts.sample + ends.sample)
    else
      puts "Error"
    end
  end
  p townNames
end

town_names(5)
town_names()

puts "using near_water"
town_names(5,"near_water")

puts "using prefix"
town_names(5,"prefix")

puts "using short_name"
town_names(5,"short_name")

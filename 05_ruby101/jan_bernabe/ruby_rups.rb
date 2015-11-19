# Round 1: Prime Time
#
# Write a method called prime? that takes a single parameter called number and returns true if the parameter is a prime number, or false otherwise.
# Use the Math.sqrt ...

def prime?(num)
   Math.sqrt(num).floor.downto(2).each {|i| p num % i == 0}
end

prime?(100)

# Round 2: Fardingworth Falls
#
# Let's generate some random town names for a Tycoon-style video-game. We can do this by combining the following generic name fragments:
# Starts: Bed, Brunn, Dun, Far, Glen, Tarn
# Middles: ding, fing, ly, ston
# Ends: borough, burg, ditch, hall, pool, ville, way, worth

starts = ["Bed", "Brunn", "Dun", "Far", "Glen", "Tarn"]
middles = ["ding", "fing", "ly", "ston"]
ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]

# Write a method called town_names that randomly generates a number of town names by combining one Start, one Middle, and one End. Calling town_names(5) should give an array of 5 town names. If just town_names is called, generate 3 names.

def town_names(num=3)

end

# 5.times do
#   p "cool"
# end
5.times{p "cool"}

town_names(5)



p starts.sample + middles.sample + ends.sample
p starts.sample + middles.sample + ends.sample
p starts.sample + middles.sample + ends.sample

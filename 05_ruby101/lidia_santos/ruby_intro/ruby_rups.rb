# git push origin master

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
# round 1
# def prime?(num)
#     (2..Math.sqrt(num).ceil).to_a.each do |number|
#         if num % number == 0
#             return false
#         else
#             return true
#         end
#     end
# end
# p prime?(18)

Starts = ["Bed", "Brunn", "Dun", "Far", "Glen", "Tarn"]
Middles = ["ding", "fing", "ly", "ston"]
Ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
def town_names()
3.times p Starts.sample + Middles.sample + Ends.sample
end

town_names

def prime? number
  result = true
  for i in 2..(Math.sqrt(number))
    p i
    if number % i == 0
      result = false
    end
  end
  return result
end

p prime?42

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
$starts = ['Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn']
$middles = ['ding', 'fing', 'ly', 'ston']
$ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']


def town_names(num = 3, suf)
  result = []
  for i in 1..num
    name = $starts.sample + $middles.sample + $ends.sample
    result.push(name)
  end
  case suf
  when "near_water"
    result = result.map { |e| e + ['-on-sea', ' Falls'].sample}
  when "short_name"
    result = []
    for i in 1..num
      name = $starts.sample + $ends.sample
      result.push(name)
    end
  end
  return result
end

p town_names(2,'near_water')
p town_names(3, 'short_name')

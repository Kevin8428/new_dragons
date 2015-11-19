# Write a method called prime? that takes a single parameter called number and returns true if the parameter is a prime number, or false otherwise.
# Use the Math.sqrt ...

def prime? num
  if num == 1 || num == 2
    puts 'Prime.'
    return true
  end
  i = 2;
  while i < Math.sqrt(num)
    if num % i == 0
      puts 'Not prime.'
      return false
    end
    i += 1
  end
  puts 'Prime.'
  return true
end

prime? 73

# Round 2: Fardingworth Falls
#
# Let's generate some random town names for a Tycoon-style video-game. We can do this by combining the following generic name fragments:
# Starts: Bed, Brunn, Dun, Far, Glen, Tarn
# Middles: ding, fing, ly, ston
# Ends: borough, burg, ditch, hall, pool, ville, way, worth

def town_names amt=5, near_water=false
  starts = ['Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn']
  middles = ['ding', 'fing', 'ly', 'ston']
  ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']
  waters = ['-on-sea', ' Falls']
  random_names = []
  i = 0
  while i < amt
    name = "#{starts.sample}#{middles.sample}#{ends.sample}"
    if near_water == 'near_water'
      name += waters.sample
    end
    random_names.push(name)
    i += 1
  end
  return random_names
end

new_names = town_names 5, 'near_water'
p new_names

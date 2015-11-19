#Round 1
def prime?(number)
square_root = Math.sqrt(number)
for x in 2..square_root
  if number % x == 0
    puts false
    return false
  end
  end
    puts true
    return true
end

#Round 2.1
def town_names(num)
  starts = ["Bed","Brunn","Dun","Far","Glen","Tarn"]
  middles = ["ding","fing","ly","ston"]
  ends = ["borough","burg","ditch","hall","pool","ville","way","worth"]
  towns = []
for x in 1..num
  town = starts.sample + middles.sample + ends.sample
  towns.push(town)
end
return towns
end
town_names(5)

#Round 2.2
def town_names(num, x)
  if x == 'near_water'
  starts = ["Bed","Brunn","Dun","Far","Glen","Tarn"]
  middles = ["ding","fing","ly","ston"]
  ends = ["borough","burg","ditch","hall","pool","ville","way","worth"]
  towns = []
  suffix = ["-on-the-sea"," Falls"]
for x in 1..num
  town = starts.sample + middles.sample + ends.sample
  towns.push(town)
end
sea_towns = towns.map{|town| town + suffix.sample}
return sea_towns
end
end
town_names(5,'near_water')

#Round 2.3
def town_names(num, x)
  if x == 'short_name'
  starts = ["Bed","Brunn","Dun","Far","Glen","Tarn"]
  ends = ["borough","burg","ditch","hall","pool","ville","way","worth"]
  towns = []
for x in 1..num
  town = starts.sample + ends.sample
  towns.push(town)
end
return towns
end
end
town_names(5,'short_name')

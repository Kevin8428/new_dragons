#ROUND 2

  #step 1
  def town_names(num)
    starts = ["Bed", "Brunn", "Dun", "Far", "Glen", "Tarn"]
    middles = ["ding","fing","ly","ston"]
    ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
    towns = []
  if num < 3
    x = 0
    while x < 3
      towns.push(starts.sample+ middles.sample + ends.sample)
      x +=1
    end
  elsif num > 3
    x = 0
    while x < num
    towns.push(starts.sample+ middles.sample + ends.sample)
    x +=1
    end
  end
    p towns
  end

  town_names(2)
  town_names(5)

  #step 2

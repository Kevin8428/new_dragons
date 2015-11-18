# Prime Time

def prime?(number)
  # number = getn.chomp
  x = Math.sqrt(number)
  counter = 0
  num = 2
  until num > x
    if number%num != 0
    else
      counter+=1
    end
    num+=1
  end
  if counter > 0
    p "false"
  else
    p "true"
  end
end

# prime?(347)

# Fardingworth Falls

def town_names(numOfTowns)
  starts = ["Bed", "Brunn", "Dun", "Far", "Glen", "Tarn"]
  middles = ["ding", "fing", "ly", "ston"]
  ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
  if numofTowns.is_a?Integer
  numOfTowns.times{
    townName = starts.sample(1)+middles.sample(1)+ends.sample(1)
    p townName
  }
  else
    3.times{
      townName = starts.sample(1)+middles.sample(1)+ends.sample(1)
      p townName
    }
  end
end

town_names(1)

def prime?(number)
  max = Math.sqrt(number)
  for i in 2..max
    for j in 2..number
      if (i * j == number)
        return false
      end
    end
  end
  return true
end

prime?(101)


def town_name(*args)
  num, changer = args
  townnames = []
  starts = ['Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn']
  middles = ['ding', 'fing', 'ly', 'ston']
  ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']
  extra = ['-on-sea', 'Falls']
  unless num
    num = 3
  end
  num.times {
    townname = starts.sample
    if changer != 'short_name'
      townname += middles.sample
    end
    townname += ends.sample
    if changer == 'near_water'
      townname += extra.sample
    end
    townnames.push(townname)
  }
  return townnames
end

town_name(5, 'near_water')

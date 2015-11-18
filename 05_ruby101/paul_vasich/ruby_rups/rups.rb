def prime? int
  (2..Math.sqrt(int)).each do |num|
  return false if int % num == 0
end
  return true
end

#p prime?(4245)
#p prime?(797)


def town_names n, param

  suffix = ['-on-sea', ' Falls']
  starts = ['Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn']
  middles = ['ding', 'fing', 'ly', 'ston']
  ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']

  ls = []

  n.times do
    town_name = starts.sample

    if param && param != 'short_name'
      town_name += middles.sample
    end

    town_name += ends.sample

    if param && param == 'near_water'
      town_name += suffix.sample
    end
    ls.push(town_name)

  end

  return ls
end

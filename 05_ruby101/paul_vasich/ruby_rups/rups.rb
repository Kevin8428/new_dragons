def prime? int
  (2..Math.sqrt(int)).each do |num|
  return false if int % num == 0
end
  return true
end

#p prime?(4245)
#p prime?(797)


def town_names n, locale, length
  starts = ['Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn']
  middles = ['ding', 'fing', 'ly', 'ston']
  ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']

  ls = []
  if !n
    n = 3
  end
  (1..n).each do
    ls.push(starts.sample+middles.sample+ends.sample)
  end
  return ls
end

puts town_names 5

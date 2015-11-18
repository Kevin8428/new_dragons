# prime

def prime? (num)
  isPrime = true
  if num == 2 || num == 3
    return true
  end
  squareRooted = Math.sqrt(num)
  i = 2
  while i <= squareRooted
    if num % i == 0
      isPrime = false
    end
    i += 1
  end
  return isPrime
end

p prime?(gets.to_i)

# towns

# Steps 1-3
def towns (*arguments)

  starts = ['Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn']
  middles = ['ding', 'fing', 'ly', 'ston']
  ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']

  townNames = []

  if arguments[0] <= 3
    times = 3
  else
    times = arguments[0]
  end

  i = 1
  until i > times
    randStart = 1 + Random.rand(6)
    case randStart
    when 1
      start = starts[0]
    when 2
      start = starts[1]
    when 3
      start = starts[2]
    when 4
      start = starts[3]
    when 5
      start = starts[4]
    when 6
      start = starts[5]
    end

    randMid = 1 + Random.rand(4)
    case randMid
    when 1
      mid = middles[0]
    when 2
      mid = middles[1]
    when 3
      mid = middles[2]
    when 4
      mid = middles[3]
    end

    randEnd = 1 + Random.rand(8)
    case randEnd
    when 1
      finish = ends[0]
    when 2
      finish = ends[1]
    when 3
      finish = ends[2]
    when 4
      finish = ends[3]
    when 5
      finish = ends[4]
    when 6
      finish = ends[5]
    when 7
      finish = ends[6]
    when 8
      finish = ends[7]
    end

    if arguments.include?('nearwater') == true
      randWater = 1 + Random.rand(50)
      p randWater
      case randWater
      when 1..25
        water = '-upon-the-sea'
      when 26..50
        water = ' Falls'
      end
    else
      water = ''
    end

    if arguments.include?('shortname') == true
      mid = ''
    end

    townNames.push(start + mid + finish + water);
    i += 1

  end
  return townNames
end

p towns(gets.to_i, 'nearwater', 'shortname')

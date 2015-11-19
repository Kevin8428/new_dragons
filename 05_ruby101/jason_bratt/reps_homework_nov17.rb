words = ["hello", "what", "is", "up", "dude"]
def lengths(words)
  return words.map{|word| word.length}
end
p lengths(words)

def transmogrifier(a, b, c)
  return (a * b) ** c
end
p transmogrifier(5, 3, 2)

def toonify(accent, str)
  if accent == 'daffy'
    return str.gsub(/s/, 'th')
  elsif accent == 'elmer'
    return str.gsub(/r/, 'w')
  end
end
p toonify("daffy", "so you smell like sausage")

def wordReverse(words)
  return words.split(' ').reverse.join(' ')
end
p wordReverse("Now I know what a TV dinner feels like")

def letterReverse(words)
  return words.split(' ').map{|word| word.reverse}.join(' ')
end
p letterReverse("Put Hans back on the line")

def longest(words)
  return words[words.map{|word| word.length}.sort[0]]
end
p longest(["oh", "good", "grief"])

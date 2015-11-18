# Round 1 ----------------------------------------------------------------------
words = ["hello", "what", "is", "up", "dude"]

def lengths(array)
  lens = []
  array.each do |string|
    lens.push(string.length)
  end
  return lens
end

p lengths(words)

# Round 2 ----------------------------------------------------------------------

def transmogrifier(x, y, z)
  return (x * y)**z
end

p transmogrifier(5, 4, 3)
p transmogrifier(13, 12, 5)
p transmogrifier(42, 13, 7)

# Round 3 ----------------------------------------------------------------------

def toonify(accent, sentence)
  if accent == "daffy"
    return sentence.gsub(/s/, "th")
  elsif accent == "elmer"
    return sentence.gsub(/r/, "w")
  else
    return sentence
  end
end

p toonify("daffy", "so you smell like sausage")

# Round 4 ----------------------------------------------------------------------

def wordReverse(string)
  words = []
  words = string.split(' ')
  return words.reverse
end

p wordReverse("Now I know what a TV dinner feels like")

# Round 5 ----------------------------------------------------------------------

def letterReverse(string)
  words = string.split(' ')
  revWords = []
  words.each do |word|
    revWords.push(word.reverse)
  end
  return revWords
end

p letterReverse("Now I know what a TV dinner feels like")
p letterReverse("Put Hans back on the line")

# Round 6 ----------------------------------------------------------------------

def longest(array)
  word = array[0]
  array.each do |wrd|
    if wrd.length > word.length
      word = wrd
    end
  end
  return word
end

p longest(["oh", "good", "grief"])
p longest(["nothing", "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

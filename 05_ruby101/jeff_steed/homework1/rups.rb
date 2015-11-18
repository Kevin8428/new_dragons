# Round 1 ----------------------------------------------------------------------
words = ["hello", "what", "is", "up", "dude"]

def lengths(array)
  return array.map{|word| word.length}
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

def word_reverse(string)
  words = string.split(' ')
  return words.reverse
end

p word_reverse("Now I know what a TV dinner feels like")

# Round 5 ----------------------------------------------------------------------

def letter_reverse(string)
  words = string.split(' ')
  return words.map{|word| word.reverse}.join(' ')
end

p letter_reverse("Now I know what a TV dinner feels like")
p letter_reverse("Put Hans back on the line")

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

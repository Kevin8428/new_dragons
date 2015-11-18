# lengths

words = ["hello", "what", "is", "up", "dude"]
def lengths(arrayInput)
  wordlength = Array.new
  arrayInput.each{|word|wordlength<<word.length}
  p wordlength
end
# lengths(words)

# transmogrifier

def transmogrifier(x, y, z)
  p (x*y)**z
end
# transmogrifier(5, 4, 3)
# transmogrifier(13, 12, 5)
# transmogrifier(42, 13, 7)

# toonify

def toonify(accent,sentence)
  case accent
    when 'elmer'
      p sentence.gsub('r','w')
    when 'daffy'
      p sentence.gsub('s','th')
    else
      p sentence
  end
end
# toonify("daffy", "so you smell like sausage")

# wordreverse

def wordReverse(sentence)
  p sentence.split.reverse.join(" ")
end
# wordReverse("Now I know what a TV dinner feels like")

# letterReverse
def letterReverse(sentence)
  p sentence.reverse.split.reverse.join(" ")
end
# letterReverse("Now I know what a TV dinner feels like")

# longest
def longest(array)
  sorted = array.sort_by{|long|long.length}
  p sorted.last
end
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

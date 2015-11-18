# Round 1

words = ["hello", "what", "is", "up", "dude"]

def lengths(words)
p words.map {|inc| inc.length}
end

lengths(words)

# Round 2

def transmogrifier(a, b, c)
  p (a * b) ** c
end

transmogrifier(5, 3, 2)

# Round 3
def toonify(accent, sentence)
  if accent == 'daffy'
    p sentence.gsub('s','th')
  elsif accent == 'elmer'
    p sentence.gsub('r','w')
  else
    p sentence
  end
end

  toonify("daffy", "so you smell like sausage")
  toonify('elmer', 'those really are some rabbits')
toonify('Nobody', 'Return as normal')

# Round 4
def wordReverse(string)
  p string.split(' ').reverse.join(' ')
end
wordReverse("Now I know what a TV dinner feels like")

# Round 5
def letterReverse(string)
  p string.reverse.split(' ').reverse.join(' ')
end
letterReverse("Now I know what a TV dinner feels like")

# Round 6
def longest(arrayOfStrings)
  p arrayOfStrings.max_by { |inc| inc.length }
  # p arrayOfStrings.max_by(&:length)   # Shortcut, but don't fully understand
end
  longest(["oh", "good", "grief"])
  longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])



  # What does   p arrayOfStrings.max  do ??? Return the last one alphabetically?

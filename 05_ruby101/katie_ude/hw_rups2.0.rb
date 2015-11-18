# Round 1
def lengths
  happy = ["sunshine", "books", "music", "travel"]
    p happy
    p happy.at(0).length
  long = happy.map do |stuff|
    stuff.length
  end
  p long
end

lengths

# Round 2
def transmogrifier(x,y,z)
  value = x*y
  if value != 0
    p value ** z
  end
end
  transmogrifier(4,5,6)

# Round 3
def toonify(accent,sentence)
  if accent == "daffy"
    sentence.gsub! "s", "th"
    p sentence
  elsif accent == "elmer"
    sentence.gsub! "r", "w"
    p sentence
  else
    p sentence
  end
end

  toonify('elmer', 'rabbits are so ridiculous')

# Round 4
def wordReverse(string)
  values = string.split(" ")
  backward = values.reverse
  p backward.join(" ")
end

wordReverse('why was today so very long')

# Round 5
def letterReverse(string)
  puts string.reverse.split(" ").reverse.join(" ")
end

letterReverse('this is ridiculous')

# Round 6
def longest
  flowers = ["lily", "tulip", "orchid", "rhododendron"]
 p flowers.max_by(&:length)
  # self.group_by(&length).max.last
end
longest

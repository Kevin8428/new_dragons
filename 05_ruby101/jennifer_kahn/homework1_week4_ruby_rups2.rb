# # # 1.
words = ["hello", "what", "is", "up", "dude"]

def lengths(array)
  lens = []
 array.each do |string|
  lens.push(string.length)
end
return lengths
end

p lengths(words)


 #2.  //  help
def transmogrifier (a, b, c)
return (a * b)**c
end
p transmogrifier (5, 4, 3)
p transmogrifier (13,12,5)
p transmogrifier (42,13,7)

 # 3.
def toonify(accent, sentence)
 if accent == "daffy"
   return sentence.gsub(/s/, "th")
   else
     return sentence.gsub(/r/, "w")
   else
     return sentence
   e end

toonify("daffy", "so you smell like sausage")

# 4.
 def letterReverse(string)
  return string.split(" ").reverse.join(" ")
end
p letterReverse("Now I know what a TV dinner feels like")

# 5./// ?? help
def letterReverse(string)
  return string(" ").reverse.join(" ")
end
p letterReverse("Put Hans back on the line")


# 6. longest
# Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.
# longest(["oh", "good", "grief"]) # => "grief"
# longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"

def longest (array)
  word = array[0]
  array.each do |words|
    if words.length > word.length
      word = words
end
  return word
end

p longest(["oh", "good", "grief"]
p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

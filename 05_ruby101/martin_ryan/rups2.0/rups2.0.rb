# Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string.
# words = ["hello", "what", "is", "up", "dude"]
# lengths(words)  # => [5, 4, 2, 2, 4]

def lengths(arr)
  lenOfStrings = arr.map{|index| index.length}
  p lenOfStrings
end
words = ["hello", "what", "is", "up", "dude"]
lengths(words)


# Write a Ruby function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
# The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
# For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
# Use your function to find the following answers.
# transmogrifier(5, 4, 3)
# transmogrifier(13, 12, 5)
# transmogrifier(42, 13, 7)

def transmogrifier(a, b, c)
  p (a * b) ** c
end
transmogrifier(2, 2, 2)

# Write a function called toonify that takes two parameters, accent and sentence.
# If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
# If the accent is "elmer", replace all "r" with "w".
# Feel free to add your own accents as well!
# If the accent is not recognized, just return the sentence as-is.
#
# toonify("daffy", "so you smell like sausage")
# #=> "tho you thmell like thauthage"

def toonify (accent, sentence)
  if accent == "daffy"
    p sentence.gsub "s", "th"
  elsif accent == "elmer"
    p sentence.gsub "r", "w"
  else
    sentence
  end
end
toonify("daffy", "so you smell like sausage")


def wordReverse(string)
  stringArr = string.split.map{|word| word}
  stringArr.reverse!
  p stringArr.join(" ")
end
wordReverse("Now I know what a TV dinner feels like")

def letterReverse(string)
  stringArr = string.split{|word| word}
  for words in stringArr
    words.reverse!
  end
  p stringArr.join(" ")
end
letterReverse("Now I know what a TV dinner feels like")

def longest(stringArr)
 p stringArr.max_by{|a| a.length}
end
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

# Round 1
# Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string.
# words = ["hello", "what", "is", "up", "dude"]
# lengths(words)  # => [5, 4, 2, 2, 4]

def lengths strings
  string_lengths = []
  strings.each do |string|
    string_lengths.push(string.length)
  end
  return string_lengths
end
p lengths ["hello", "what", "is", "up", "dude"]

# Round 2
# Write a Ruby function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
# The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
# For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
# Use your function to find the following answers.
# transmogrifier(5, 4, 3)
# transmogrifier(13, 12, 5)
# transmogrifier(42, 13, 7)

def transmogrifier x, y, z
  return (x*y)**z
end
p transmogrifier(5, 4, 3)
p transmogrifier(13, 12, 5)
p transmogrifier(42, 13, 7)

# Round 3
# Write a function called toonify that takes two parameters, accent and sentence.
# If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
# If the accent is "elmer", replace all "r" with "w".
# Feel free to add your own accents as well!
# If the accent is not recognized, just return the sentence as-is.
# toonify("daffy", "so you smell like sausage")
# #=> "tho you thmell like thauthage"

def toonify accent, sentence
  if accent == 'daffy'
    sentence.gsub!(/[s]/i, 'th')
  elsif accent == 'elmer'
    sentence.gsub!(/[r]/i, 'w')
  end
  return sentence;
end
p toonify("daffy", "So you smell like sausage")
p toonify("elmer", "Are you really ready to replace the river with a rake?")

# Round 4
# Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.
# wordReverse("Now I know what a TV dinner feels like")
def wordReverse str
  return str.split(' ').reverse.join(' ')
end
p wordReverse("Now I know what a TV dinner feels like")

# Round 5
# Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.

def letterReverse str
  reversed = str.split(' ').map! do |word|
    word.reverse!
  end
  return reversed.join(' ')
end
p letterReverse("Now I know what a TV dinner feels like")

# Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.

def longest strings
  longest = 0
  winner = ''
  winners = []
  strings.each do |str|
    if str.length > longest
      longest = str.length
      winner = str
    elsif str.length > 0 && str.length == longest
      winners = [winner, str]
    end
  end
  if winners.empty?
    return winner
  else
    return winners.sample
  end
end
p longest(["oh", "good", "grief"])
p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
p longest(['abc', 'defg', 'hij', 'klmn', 'op'])

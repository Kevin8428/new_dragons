############################################################
#                   COMMENTS AND REFLECTIONS               #
############################################################
# COMPLETE: 3 (Finished 4 of 6)
# COMPREHENSION: 3.
# COMMENTS:  It's still new but js skills do transfer over. Skills like progamming concepts and similar methods plus logic, pseudocoding and using documentation. Note: toonify sub method works on sentence but can't get whole method to work when called



############################################################
#                  END COMMENTS AND REFLECTIONS            #
############################################################

# Round 1
#
# Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string.
# words = ["hello", "what", "is", "up", "dude"]
# lengths(words)  # => [5, 4, 2, 2, 4]
#
stringArray = ['cube', 'sphere', 'box']

def lengths (array)
   string_lengths= [] # array name with underscores
   array.each {|x| string_lengths << x.length}
   p string_lengths
   return string_lengths
end

lengths(stringArray)

# Round 2
# Write a Ruby function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
# The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
# For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
# Use your function to find the following answers.
# transmogrifier(5, 4, 3)
# transmogrifier(13, 12, 5)
# transmogrifier(42, 13, 7)

def transmogrifier(num1, num2, num3)
   return (num1 * num2) ** num3  # ** raises to the power of...
end

p transmogrifier(5,4,3)
p transmogrifier(13, 12, 5)
p transmogrifier(42, 13, 7)


# Round 3
# Write a function called toonify that takes two parameters, accent and sentence.
# If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
# If the accent is "elmer", replace all "r" with "w".
# Feel free to add your own accents as well!
# If the accent is not recognized, just return the sentence as-is.
#
# toonify("daffy", "so you smell like sausage")
# #=> "tho you thmell like thauthage"

def toonify (accent, sentence)

   if accent == 'daffy'
      sentence = sentence.sub('s', 'th')
   elsif accent == 'elmer'
      sentence = sentence.sub('r', 'w')
   end # need to end the if else statement w end not w closing brace

   return sentence
   p sentence

end

toonify('elmer', 'dangnabbit, that rascally rabbit!')
toonify('daffy', 'say, I suspect something fishy')



# Round 4
#
# Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.
# wordReverse("Now I know what a TV dinner feels like")
# # => "like feels dinner TV a what know I Now"

def wordReverse(string)
   array = string.split # [well, ruby, i, write]
   reverse_string = array.reverse.join(" ")
   p reverse_string
   return reverse_string
end

wordReverse('well ruby write I')



# Round 5
#
# Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.
# letterReverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letterReverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"





# Round 6
#
# Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.
# longest(["oh", "good", "grief"]) # => "grief"
# longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# # => "unrequited"

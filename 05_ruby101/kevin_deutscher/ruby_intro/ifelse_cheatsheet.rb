# guess = 'fdafs'
# correct_answer = 23
#

#if statements
#
# if guess.is_a?Integer
#   if guess ==23
#     p'you guessed it'
#   else
#     p'wrong'
#   end
# else
# p'not a number'
# end



#
# if guess == correct_answer
#   p'you guessed it'
# elsif guess<correct_answer
#   p'you are too kind'
# elsif guess>correct_answer
#   p'wow...wow...'
# else
#   p'wrong'
# end

# p or put or print

#----------------------
# x = true
# # unless x == false
# #   puts"it's true"
# # end
#
# #do this unless condition
# # puts "it's true" unless x==false
#
# #do this if condition
# puts "it's true" if x!=false
#
#
# #when using unless, cant use else if
# unless x ==false
#   puts"it's true"
# else
#   puts"it's false"
# end

#-----------------------

name = 'kevin'
guessName = 'kevin'


if guessName.is_a?Integer
  puts "don't input a number"
elsif name === guessName
  puts "correct"
else
  puts "try again"
end

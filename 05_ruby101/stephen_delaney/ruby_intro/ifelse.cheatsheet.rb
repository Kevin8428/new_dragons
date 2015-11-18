# # If else cheat sheet
#
# # Example 1
# guess = 5
# correct_answer = 23
#
# if guess == correct_answer
#   p "you guessed it"
# elsif guess < correct_answer
#   p "you are too kind"
# elsif guess > correct_answer
#   p "wow.... wow.... :("
# else
#   p "wrong"
# end
#
# # Example 2
#
# guess = 5
# correct_answer = 23
#
# if guess.is_a?Integer
#   if guess == 23
#   p "you guessed it"
# elsif guess != correct_answer
#   p "wrong"
# end
# else
#   p "not a number"
# end
#
#
# # Example 3 -- unless condition
#
# x = true
#
# unless x == false
#   puts "it's true"
# end
#
# # Or can do in one line!
# x = true
#
# puts "it's true!" unless x == false

# # Example 4 -  Do this if condition
#
# x = true
#
# puts "it's true" if x != false


# # Example 5 - Unless with else
# x = true
#
# unless x == false
#   puts "it's true"
# else
#   puts "it's false"
# end

# Exercise -- Guessing Game
guess = 27
luckyNumber = 21

if guess == luckyNumber
  p "Yep, that's my lucky numer!"
elsif guess < luckyNumber
  p "Too low!"
else
  p "Too high!"
end

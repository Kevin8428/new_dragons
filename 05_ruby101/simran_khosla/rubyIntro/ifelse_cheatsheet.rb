guess = 25

correct_answer = 23

if guess.is_a? Integer
    if guess == correct_answer
      p "you guessed the right number"
    elsif guess<correct_answer
      p "that number is too low"
    elsif guess>correct_answer
      p "that number is too high"
    end
else
  p "not a number"
  end


#
# x = true
#
# unless x == false
#   puts "it's true"
# end
#

# #do this unless condition
# puts "it's true!" unless x == false
#

# x = true
# unless x == false
#   puts "it's true"
# else
#   puts "it's false!"
# end

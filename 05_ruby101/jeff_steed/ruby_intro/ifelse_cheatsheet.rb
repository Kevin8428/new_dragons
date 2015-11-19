      #
    #
  #
#
  #
    #
      #
        #
          #

guess = 12
correct_answer = 23
#
#
# # if statements
# # if condition
#   # do this
# # end
if guess.is_a? Integer
  if guess > correct_answer
    puts "Too high!"
  elsif guess < correct_answer
    puts "Too low!"
  else
    puts "You guessed it!"
  end
else
  puts "Not a number."
end
##############################################################
x = true

# unless condition
  # do this
# end

# unless x == false
#   puts "It's true, you idiot!"
# end

# unless statement on one line
# puts "It's true, you idiot!" unless x == false

# if statement on one line
# puts "It's true, you idiot!" if x != false

# using unless with else
# unless x == false
#   puts "It's true, you idiot!"
# else
#   puts "It's false."
# end

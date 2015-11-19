userGuess = 6
def guessNum (userGuess)
   number = 5
   if userGuess > 5
      puts "too high"
   elsif userGuess < 5
      puts "too low"
   else
      puts "correct!"
end

guessNum





# can use else but not elsif with unless
# x = true
# unless x == false
#    puts "its true"
# else
#    puts "its false"
# end


# p or puts or print

# if statement and condition
#  do this
# end
# x = true
# unless x == false
#    puts "its true"
# end
#
# # 1 line: do this unless condition
# puts "its true" unless x == false
# puts "its true" if x != false


# guess = 5
# correct_answer = 23
#
#
# if guess.is_a? Integer
#    if guess == correct_answer
#       p "you guessed it"
#    elsif guess != correct_answer
#       p "wrong"
#    end
# else
#    p "not a number"
# end

end

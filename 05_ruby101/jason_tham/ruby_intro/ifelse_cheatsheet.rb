# guess = 23
# correct_answer = 23
#
# # if statements
# if guess.is_a? Integer
#   if guess == 23
#     p "you guessed it"
#   elsif guess != correct_answer
#     p "wrong"
#   end
# else
#   p "not a number"
# end

# x = true
#
# unless x == false
#   puts "its true!"
# end

# puts "it's true" unless x == false


# puts "it's true" if x!= false
#
# unless x == false
#   puts "it's true"
# else
#   puts "it's false!"
# end

answer = 33

puts "How old am I?"
guess = gets
guess = guess.chomp.to_i
if guess > answer
  p "too high"
elsif guess < answer
  p "too low"
elsif guess == answer
  p "you da best mayne, you did it"
end

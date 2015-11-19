# guess = 4
# correct_answer  = 23
#
# if guess.is_a? Integer
#   if guess > correct_answer
#     p 'High as a kite'
#   elsif guess < correct_answer
#     p 'Too low too slow.'
#   else
#     p 'You got it.'
#   end
# else
#   p 'Please enter a valid number.'
# end

 # x = true
#
# unless x == false
#   p 'its true!'
# end
# puts 'it\'s true!' if x != false

# unless x == false
#   p "it's true!"
# else
#   p "it's false!"
# end

def guess
  number = 22
  guess = gets.to_i
  if guess > number
    p 'too high!'
    guess
  elsif guess < number
    p 'too low!'
    guess
  else
    p 'you got it.'
  end
end

guess

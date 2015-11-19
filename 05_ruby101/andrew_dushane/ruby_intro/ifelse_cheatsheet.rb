# guess = 'whattup doe'
# correct_answer = 23
#
# if guess.is_a? Integer
#   if guess == correct_answer
#     p 'you guessed it'
#   elsif guess < correct_answer
#     p 'too low'
#   elsif guess > correct_answer
#     p 'wow'
#   else
#     p 'wrong'
#   end
# else
#   p 'Please enter an integer'
# end


def check_num number
  unless number == 7
    puts 'Your number is not seven.'
  else
    puts 'Good job.'
  end
end

def check_truth arg
  puts "It's true" unless arg == false;
end
# check_truth 86

def unless_else_stuff arg
  unless arg == false
    puts 'It is true'
  else
    puts "It's false"
  end
end
# unless_else_stuff false

def check_for_num
  i = 0
  puts 'Guess a number.'
  num = gets.to_i
  unless num == 7
    puts 'Try again.'
    check_for_num
  else
    puts 'Nicely done.'
    return true;
  end
end
check_for_num

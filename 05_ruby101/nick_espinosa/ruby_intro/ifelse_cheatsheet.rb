guess = 22
correct_answer = 23

# if statements
# if condition
  # do this
# end
# you can do print, puts is for multiple lines, or just p

if guess.is_a? Integer
  if guess == 23
  p "you guessed it"
elsif guess !=correct_answer
  p "wrong"
end
else
  p "is not a number"
end
x = true
# unless condition
#   do this
#   end
# unless x == false
#   puts "it's true!"
# end
# do this unless condition
# puts "it's true" unless x == false
# puts "it's true" if x != false
unless x == false
  puts "it's true"
else
  puts "it's false"
end
guess = 7
if guess > 7
  puts "too high"
elsif guess < 7
  puts "too low"
else
  puts "good job"
end

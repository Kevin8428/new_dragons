guess = 23
correct_answer = 23

# if statements in Ruby
# if condition
  # do this
# end
if guess.is_a?Integer
  if guess == 23
    p "you guessed it"
  elsif guess != correct_answer
    p "wrong"
  # p, puts, or print are all options for output
end
else
  p "not a number"
end

x = true
# unless condition
  #do this
#end
unless x == false
  puts "it's true"
end

# do this unless condition
puts "it's true!" unless x == false

# do this if condition (on one line)
puts "it's true" if x != false

x = true
unless x == false
  puts "it's true"
else
  puts "it's false"
end
# cannot use elsif statements w/ an unless statement


secretNum = 14
guess = 23
if guess < secretNum
  puts "Please pick a higher number."
elsif guess > secretNum
  puts "Please pick a lower number."
else
  puts "You have have guessed my lucky number!"
end

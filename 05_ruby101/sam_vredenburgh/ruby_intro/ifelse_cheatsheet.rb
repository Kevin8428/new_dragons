guess = 23
correct_answer = 23

if guess == correct_answer
  p "you guessed it"
elsif guess < correct_answer
  p "too low"
else guess > correct_answer
  p "too high"
end

x = true

unless x == false
  puts 'its true!'
end
# also like
puts 'its true!' unless x == false

# if on one line
puts "its true!" if x!= false

# unless with else

unless x == false
  puts "its true!"
else
  puts "its false!"
end

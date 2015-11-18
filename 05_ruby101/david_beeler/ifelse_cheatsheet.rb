guess = 0
correct_answer = 23

if (guess < correct_answer) && (guess.is_a? Integer)
  puts "too low"
elsif guess > correct_answer
  puts "too high"
elsif guess == correct_answer
  puts "yep"
else
  puts 'nope'
end


# p, print, puts
# puts will do multiple lines

## STARTED PUTTING THESE ELSEWHERE

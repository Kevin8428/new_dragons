#if else
guess = 5
correct_answer = 23

# puts puts it in multiple lines, print prints it out in just one line
if guess.is_a?Integer #.is_a? asks the type of the variable
  if guess == correct_answer
    p 'You nailed it!'
  elsif guess > correct_answer
    p 'Your guess is too high'
  elsif guess < correct_answer
    p 'Your guess is too low'
  else
    p 'There was an error'
  end #Remember to end each if else statement tree
else
  p 'Your guess was not an integer'
end

Unless
x = true
unless x == false
  p 'It\'s false'
end

# or you can do this:
# do this unless condition
puts "It\'s true" unless x = false

do this if condition
puts "It\'s true" if x != false

# Unless with else
# Can you else with unless but can't use elsif
x = true
unless x == false
  p "It\'s true"
else
  p "It\'s false"
end

guess = 29
age = 23

unless age == guess
  puts 'It\'s false'
else
  puts 'It\'s true'
end

puts 'It\'s true' if age == guess
puts 'It\'s false' if age != guess

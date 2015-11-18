# vanilla js:
# switch (input) {
#   case 'something'
#     do this
#       break;
# }
# ruby:
# case input
# when 'condition'
#   do this
# else
#  do this
# end

print 'What is your grade?'
grade = gets.chomp #gets grabs user input, chomp cuts of last character

case grade
  when 'A'
    put 'good job!'
  when 'B'
    put 'still pretty good!'
  when 'C'
    put 'depends on your parents...'
  else
   p 'liar!'
  end

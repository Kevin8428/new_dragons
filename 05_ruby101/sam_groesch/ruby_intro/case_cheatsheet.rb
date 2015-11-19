# JavaScript:
# switch (x) {
#   case 1: 'x is 1'
#     break;
#   case 2: 'x is 2'
#     break;
#   default: 'oops this isn\'t JavaScript'
# }

# Ruby:
# case input
# when "this condition"
#   do this
# else
#   do this
# end

print "What's your grade?"
grade = gets.chomp
# gets means get string user input from the terminal
# chomp adds a new line

case grade
  when "A"
    p "Good Job"
  when "B"
    p "Still pretty Good"
  when "C"
    p "depends on your parents"
  else
    p"liar"
end

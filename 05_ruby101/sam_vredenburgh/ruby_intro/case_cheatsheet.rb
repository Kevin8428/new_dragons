# case input
# when 'condition'
#   do this
# else
#   do this
# end

print "What is your grade?"
#gets grabs user input
#chomp cuts off last character
grade = gets.chomp

case grade
when "A"
  p "good job"
when "B"
  p "not bad at all"
when "C"
  p "average sir"
else
  p "poor job"
end

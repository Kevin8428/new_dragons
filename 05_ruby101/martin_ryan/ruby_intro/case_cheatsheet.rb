# case input
# when "condition"
#   do this
#   else
#     do this
#     end


print "what is your grade?"
grade = gets.chomp

case grade
when "A"
  p "good job"
when "B"
  p "still pretty good"
when "C"
  p "depends on your parent"
else
  p "liar"
end

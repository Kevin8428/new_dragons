# case input
# when "condition"
#   do this
#   else
#     do this
#   end
print "What is your grade?"
grade = gets.chomp

case grade
when "A"
  p "good job"
when "B"
  p "pretty good"
when "C"
  p "depends"
else
  p "liar"
end

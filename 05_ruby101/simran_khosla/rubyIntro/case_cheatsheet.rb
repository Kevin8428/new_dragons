# IN JAVASCRIPT
# switch (input) {
#   case "something"
#     do this
#       break
#   case "something"
#     ... etc.
# }

# IN RUBY
# case input
# when "condition"
#   do this
#   else
#     do this
# end


print "What is your grade?"
grade = gets.chomp

case grade
  when "A"
  p "good job"
  when "B"
  p "still pretty good"
  when "C"
  p "depends on your parents"
  else
  p "liar!"
end

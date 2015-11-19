# in java
# switch (input){
#   case "something"
#     do this
#       break;
#       case....
#         do...
#           break;
# }

##### in ruby this is basic syntax for switch statement
# case input
# when "condition"
#   do this
#   else
#     do this
#   end

print "What is you grade?"
### gets grabs user input
### chomp cuts off last character
grade = gets.chomp

case grade
when "A"
  p "good job!"
when "B"
  p "still pretty good"
when "C"
  p "depends on your parent"
else
  p "liar"
end

# javascript version
#
# switch(input) {
#   case "something"
#     do this
#     break;
#
#   case "blah"
#     do that
#     break;
# }


# RUBY SYNTAX
# case input
#   when "condition"
#     do some shiznitz
#   else
#     do this
# end

print "What is your grade?"
grade = gets.chomp
case grade
  when "A"
    p "good job!"
  when "B"
    p "still pretty good"
  when "C"
    p "depends on your parent"
  else
    p "liar!"
end

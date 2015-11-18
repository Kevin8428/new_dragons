# # Basic Syntax
# case input
# when "condition"
#   do this
#   else
#     do that
#   end

  # Example 1
# Gets: grabs user input
# Chomp: Cuts off last character (allows it to actually read the input)

  print "What is your grade?"
  grade = gets.chomp

  case grade
  when "A"
    p "Good job!"
  when "B"
    p "Still pretty good."
  when "C"
    p "Not so great."
  else
    p "Yikes. Drop out."
  end

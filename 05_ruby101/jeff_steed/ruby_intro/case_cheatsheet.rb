# case cheatsheet
# input = true
#
# case input
# when false
#   puts "It was false."
# when true
#   puts "It was true."
# else
#   puts "I don't know."
# end

print "What is your grade? "
# gets - gets the user input
grade = gets.chomp

case grade
when "A"
  puts "Good job!."
when "B"
  puts "Nice work."
when "C"
  puts "Depends on your parent."
else
  puts "Liar!"
end

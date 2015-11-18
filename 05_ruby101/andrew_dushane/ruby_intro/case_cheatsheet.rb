def check_grade
  print "What is your grade? "
  grade = gets.chomp
  case grade
  when 'A'
    p 'Good job.'
  when 'B'
    p 'Still pretty good.'
  when 'C'
    p 'Depends on your parents.'
  else
    p 'Slacker.'
  end
end
check_grade



# Basic case syntax
# case input
# when 'something'
#   dosomething
# when 'something else'
#   dosomethingelse
# else
#   doanotherthing
# end
#

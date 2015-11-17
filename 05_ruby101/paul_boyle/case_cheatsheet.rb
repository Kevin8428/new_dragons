print "what is your grade"
grade = gets.chomp

case grade
  when "A"
    p 'good job'
  when "B"
    p 'ok '
  when 'C'
    p 'WTF'
  else
    p 'liar'
end

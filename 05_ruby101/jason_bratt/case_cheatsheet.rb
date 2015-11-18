print "What is your grade?"
grade = gets.chomp

case grade
  when 'A'
    p 'nice'
  when 'B'
    p 'ok'
  when 'C'
    p 'average'
  when 'D'
    p 'you faillllll.'
end

puts "Is it less or equal? #{5 <= -2}"

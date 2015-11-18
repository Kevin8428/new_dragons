=begin
case input
when "condition"
  'do this'
else
  'do whatever else'
end
=end

print "what's yo grade?"
grade = gets.chomp

case grade
when "A"
  p "fantastic"
when "B"
  p"still good"
when "C"
  p"depends on your parent"
else
  p"liar"
end

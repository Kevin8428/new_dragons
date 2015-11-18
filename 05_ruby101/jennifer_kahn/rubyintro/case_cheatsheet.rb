#case input
#when "condition"
#do this
#else
#do this
#end

print "what is your grade?"
grade = gets.chomp

#use case when you have a bunch of conditions you want to check

case grade
    when "A"
    p "good job"
    when "B"
    p "still pretty good"
    when "C"
    p "depends on your parent"
    else
    p "liar"
end
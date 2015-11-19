# guess = Integer gets rescue nil
# answer = 62
#
# if guess
#   if guess == answer
#     p "yes very good"
#   elsif guess != answer
#     p "wrong"
#   end
# else
#   p "not a number"
# end


def secret_number
  guess = Integer gets rescue nil
  if guess < 5
     puts "too low"
   elsif guess > 5
     puts "too high"
   else
     puts "wowowow"
   end
 end

secret_number

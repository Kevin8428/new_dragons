# # # # guess = 17
# # # # correct_answer = 23
# # # #
# # # # # p  => prints string on one line; double equals for comparasion.
# # # # # && || for and or logic
# # # # if guess.is_a?Integer
# # # #   if guess == correct_answer
# # # #     p 'you guessed it'
# # # #   elsif guess != correct_answer
# # # #     p 'Wrong'
# # # #   end
# # # # else
# # # #   p 'not a number'
# # # # end
# # #
# # #
# # # #unless this condition is true
# # # #do this
# # # #end
# # #
# # # x = true
# # # #
# # # # unless x == false
# # # #   puts "it's true!"
# # # # end
# # #
# # # # puts 'it"s true' unless x == false
# # #
# # # puts 'its true' if x == true
# #
# # x = true
# # unless x == false
# #   puts 'its true'
# # else
# #   puts 'its false'
# # end
# count = 0
# def secret
#   secret = 17
#   count++
#   puts "guess my secret number"
#   number = gets.to_i
#
#   while count < 3
#     if number > secret
#       puts 'lower'
#       puts count
#     elsif number < secret
#       puts 'higher'
#       puts count
#     else
#       puts 'noiiiiceee! you got it!'
#       puts count
#     end
#   end
# end
#
# secret

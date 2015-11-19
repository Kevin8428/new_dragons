# # Three main loops: while, until and for

# # Exericse 1: While loop
          # # while condition is true
          # #   do this
          # # end
# num = 1

# while num < 11
#   p num
#   num+=1
# end

# # Exercise 2: Until loop

# num = 1

# until num > 10
#   p num
#   num+=1
# end

# # Exercise 3: For loop
#
# # 3.1 Option
#
# # for num in 0..5
# #   p num
# # end
#
# # 3.2 Option: Adding on an if statement
#
# # for num in 0..5
# #   if num > 2 then
# #     p "greater then two"
# #   end
# #   p num
# # end
#
# # 3.3 Option: Working with an array
# animals = ['dogs', 'wolves', 'red pandas', 'meerkats']
# for inc in animals
#   p inc
# end


# ITERATOR
10.times do |i|
    puts i
end

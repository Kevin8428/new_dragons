#while loop

num = 1
animals = ["dogs", "wolves", "lepards"]
#
# while num < 11
#   p num
#   num+=5
# end

# until num > 10
#   p num
#   num+=3
# end

# for num in 0..5
#   p num
#   if num > 2 then
#     p num + num
#   end
# end

for animal in animals
  p animal.upcase
end

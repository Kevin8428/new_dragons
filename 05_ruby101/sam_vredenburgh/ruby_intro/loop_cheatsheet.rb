# While loop
num = 1
# While condition is true
# do this
while num < 11
  p num
  num += 1
end

# Until loop
num = 1
# Keep doing something
# until a condition is met
until num > 10
  p num
  num += 1
end

# For loop
for num in 0..5
  if num > 2 then
    puts "greater than two"
    end
  p num
end

# For loop with an array - don't usually use wtih arrays
animals = ["dogs", "wolves"]
for animal in animals
  p animal
end

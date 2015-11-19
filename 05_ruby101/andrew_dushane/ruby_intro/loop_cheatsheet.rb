#while loop
def lets_while_loop
  num = 1
  while num < 11
    p num
    num += 1
  end
end
# lets_while_loop

# until loop
def lets_until_loop
  num = 1
  until num > 10
    p num
    num += 1
  end
end
# lets_until_loop

# for loop
def lets_for_loop
  for num in 1..10
    if num > 2 then
      puts "grater then too"
    end
   p num
  end
end
# lets_for_loop

#for each loop
def lets_for_each_loop
  animals = ['turtle', 'iguana', 'alligator']
  for animal in animals
    p animal
  end
end
# lets_for_each_loop

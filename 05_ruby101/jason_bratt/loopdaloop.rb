#While Loop

num = 1

while num < 11
  p num
  num+=1
end


#until loop
num2 = 1
until num2 > 10
  p num2
  num2+=1
end

#for loop

for num3 in 0..5
  if num3 > 2 then
    puts 'greater than 2'
  end
  puts num3
end

# array crap

animals=["dogs","wolfs"]
for animal in animals
  p animal
end

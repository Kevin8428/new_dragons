# While loop
num = 1

while num < 11
  p num
  num+=1
end

# util loop
until num > 10
    p num
    num += 1
end


# for loop
for num in 0..5
  p num
end

# for loop
for num in 0..5
  if num > 2 then
    p "greater than two"
  end
  p num
end


animals=["dogs", "wolves", "horses"]
for stuff in animals
  p stuff
end

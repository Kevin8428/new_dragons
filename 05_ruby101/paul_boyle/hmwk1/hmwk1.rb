words = ['hello','what','is','up','dude']
# def lengths (arr)
#   len=[]
#   for word in arr
#     len.push(word.length)
#   end
#   p len
# end

def lengths (arr)
  return arr.map!{|word| word.length}
end

lengths(words)

def trans(num1,num2,num3)
  return (num1*num2)**num3
end

p trans(1,3,3)#27

def toonify (accent,sentence)
  if accent.downcase == 'daffy'
    return  p sentence.gsub 's', 'th'
  elsif accent.downcase == 'elmer'
    return p sentence.gsub 'r','w'
  else
    return sentence
  end
end
toonify("daffy", "so you smell like sausage")

def letterReverse(str)
  return str.split.each{|word| word.reverse!}.join(' ')
end

p letterReverse("Put Hans back on the line")

def wordReverse(str)
  return str.split.reverse.join(' ')
end

p wordReverse('now i know what tv dinner feels like')

def longest (arr)
  return arr.max{|a,b| a.length <=> b.length}
end

p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])


# Round 1: Prime Time
#
# Write a method called prime? that takes a single parameter called number and returns true if the parameter is a prime number, or false otherwise.
# Use the Math.sqrt ...

def prime? (number)
  if number == 2
    return true
  elsif number < 2
    return false
  else
    for num in 2..Math.sqrt(number)
      if number % num == 0
        return false
      else
        return true
      end
    end
  end
end

p prime?(17)#true
p prime?(2)#true
p prime?(10000001)#true
p prime?(-10)#false
p prime?(2)#true

# Round 2: Fardingworth Falls
#
# Let's generate some random town names for a Tycoon-style video-game. We can do this by combining the following generic name fragments:
# Starts: Bed, Brunn, Dun, Far, Glen, Tarn
# Middles: ding, fing, ly, ston
# Ends: borough, burg, ditch, hall, pool, ville, way, worth
# Step 1
#
# Write a method called town_names that randomly generates a number of town names by combining one Start, one Middle, and one End. Calling town_names(5) should give an array of 5 town names. If just town_names is called, generate 3 names.
# Step 2
#
# Modify the method so that calling town_names(3, 'near_water') will randomly add either "-on-sea" or " Falls" to each of the names. Optionally, think of another value that the second argument could have, and add appropriate random suffixes or prefixes when it is provided.
# Step 3
#
# Modify the method so that calling town_names(3, 'short_name') will always generate names without a Middle.

def town_names(amount,location)
  starts=['Bed','Brunn','Dun','Far','Glen','Tarn']
  middles=['ding','fing','ly','ston']
  ends=['borough','burg','ditch','hall','pool','ville','way','worth']
  near_water=['falls','-on-sea']
  mountain=['Mount ', 'The hills of ']
  names=[]

  amount.times do
    if location == 'near_water'
      names.push(starts.sample+middles.sample+ends.sample+near_water.sample)
    elsif location == 'mountain'
      names.push(mountain.sample+starts.sample+middles.sample+ends.sample)
    elsif location == 'short_name'
      names.push(starts.sample+ends.sample)
    else
      names.push(starts.sample+middles.sample+ends.sample)
    end
  end
  return names
end

p town_names(3, 'short_name')
p town_names(3, 'near_water')
p town_names(3, 'mountain')









#
# #######################################################################################################################
# #######################################################################################################################
# #######################################################################################################################
# #######################################################################################################################
# #######################################################################################################################
#
#
# # def greaterThanTwo(arr)
# #   arr.each do |thing|
# #
# #     end
# #   end
#
#
# def greaterThanTwo(arr)
#   arr.each do |num|
#     if num > 2
#       p num
#     else
#       p 'not greater than two'
#     end
#   end
# end
#
# p greaterThanTwo([2,3,4,5])
#
# p adriana = {name: 'adriana',
#   :age =>23}
# p james = Hash.new
#
# paul = {:name=> 'Paul',
#         :eyeColor => 'blue'}
# p paul
#
#
#
#
# #
# #
# # #
# # # # # #
# # # # # # words.each do |x|
# # # # # #    p words[x].length
# # # # # #  end
# # # # #
# # # # #
# # # # #  num = 1
# # # # #  while num < 11
# # # # #    p num
# # # # #    num+=1
# # # # #  end
# # # # #
# # # # #
# # # # num = 0
# # # # until num > 10
# # # #   p num
# # # #   num +=1
# # # # end
# # # # num = 0
# # # # for num in 0..5
# # # #   p num
# # # #   num +=1
# # # # end
# # #
# # # # for num in 0..5
# # # #   if num > 2
# # # #     p 'greater than two'
# # # #   end
# # # #   p num
# # # # end
# # # # animals = ['cats','dogs','sup']
# # # # for a in animals
# # #   # p a
# # # # # end
# # #
# # # teachers = ['jim','adriana','james']
# # #  p teachers.length
# # #  p teachers.count{|name| name == 'adriana'}

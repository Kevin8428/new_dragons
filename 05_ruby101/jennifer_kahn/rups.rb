


# wdi_chi_dragons/05_ruby101/your_name/rups.rb


#
#
# # A prime number (or a prime) is a natural number greater than 1 that has no positive divisors
# other than 1 and itself. A natural number greater than 1 that is not a prime number is called a composite number.
#
#
#




#
# number = 12
#
# def prime?(number)
#
# if (num % 0, num % 1)
#   p "true"
# else
#   p "false"
# end



def prime?(num)
  Math.sqrt(num).floor.downto(2).each{|i|p num % i ==0}
end

prime?(200)
#
#
#
#
#
#
#
# # For the random town question research the .times method in ruby
#
#
#
#
#
#
# town_names= Start["bed", "brun", "Dun", "far", "glen", "tar"]
#
# town_names2= Middle["ding", "fing", "ly", "ston"]
#
# town_names3= End["borough","burg","ditch", "hall", "pool", "ville", "way", "worth"]
#
# for town_names in town_name
#
#   p
#
# animals= ["dogs", "wolf"]
# for animal in animals
#   p animal
# end
#
#
# p town_names.sample

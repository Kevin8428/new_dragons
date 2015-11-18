# a 'hash' is an object

#p kevin = {} # this is an empty hash
# p kevin = Hash.new # does same as above


# two ways to do the same thing
p kevin = {
  name: "kevin",
  :age => 27} # arrow or colon are acceptable and used

# p james = Hash.new
# james[:age] = 30
# #p james
# p james[:name]= "james"
# p james
#
# p kevin[:age]
#
# james[:name] = "Chewy"#this will access name in james and update to Chewy
# p james
#
# p kevin.keys # return keys
# p kevin.values # return values
# james.delete(:name)
# p james


#below is string interpolation, NEEDS DOUBLE QUOTES
kevin.each{|key,value|p "#{key},#{value}"} # could put k and v versus key and value, they are just placeholders

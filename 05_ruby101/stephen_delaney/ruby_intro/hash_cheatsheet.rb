# # Stephen = {} OR Stephen = Hash.new
#
# p Stephen = {name: 'Stephen Delaney',
#   :age => 27}


## This is a hash, NOT an object. True objects are done with classes.

james = Hash.new
james[:age] = 100
james[:name] = 'James Traver'

# p james
# p james[:name]

# james[:name] = "Changed your name"

# p james
# p james.values

# james.delete(:name)
# p james

# james.each{|key, value| p "#{key}, #{value}"} # need to have double quotes
james.each{|x, y| p "#{x}, #{y}"} # this works, too

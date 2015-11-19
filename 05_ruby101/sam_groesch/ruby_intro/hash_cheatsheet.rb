# Hashes

# p adriana = {} # These have the same output
# p james = Hash.new

p sam = {name:"Sam",
:age => 23}
p james = Hash.new

james[:age] = 1000
p james
james[:name] = 'James'
p james

# p sam[:age]
#
# p sam.values # returns set of values for this Hash
# sam.delete(:name) # deletes that key and value

sam.each{|k,v| p "#{k},#{v}"} # String interpolation, double quotes matter here

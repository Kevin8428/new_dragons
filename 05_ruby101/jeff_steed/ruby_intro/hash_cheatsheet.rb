# hash cheatsheet

# adriana = {} # or...
# james = Hash.new

# not a true object. This is a hash. In Ruby, classes are new objects with properties and methods, not hashes
adriana = {
  name: "adriana",
  :age => 23,
  otherAge: 23
}

# james = Hash.new
# james[:age] = 75
# james[:name] = "James"
# james[:name] = "Chewy"
# puts james[:name]
#
# puts adriana.keys
# puts adriana.values

adriana.delete(:otherAge)
# puts adriana

adriana.each{|key, value| puts "This is key '" + "#{key}" + "' with the value '" + "#{value}" + "'"}

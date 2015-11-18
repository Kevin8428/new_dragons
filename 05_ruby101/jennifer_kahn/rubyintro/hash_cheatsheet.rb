# Hashes create objects

p adriana = {}
p james = hash.new

# those two things are the sample

p adriana = {name: "adriana",
:age=> 23
}


p james = Hash.new
p clone = adriana.new

james[:age] = 10000000
p james

james[:name] = "james"
p james

#call whatver key you want to get, when trying to access a specific key

# PAY ATTENTION TO USE OF THE COLON. They help you access different items in the hash.

p adriana[age]

james[:name] = "chewy"
p james

p adriana.values
james.delete(:name)
p james

# Each methods with Hashes

adriana.each{[key,value]}

# these are just placeholders

adriana.each{{key,value}}

# this is where double quotes matter
adriana.each{
  

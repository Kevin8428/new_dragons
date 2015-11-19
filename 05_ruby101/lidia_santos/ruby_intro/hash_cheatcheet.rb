# object in javascript look like this
# {
#   name: "adriana",
# }
#
# in ruby they look like this
p adriana =
{name: "Adriana",
  :age => 23 }
p james = Hash.new

james[:age] = 100000
p james
james[:name] = "james"
p james

p adriana[:name]

james[:name] = "Chewy"
p james

p adriana.values #shows values

james.delete(:name) #deletes the argument you put in
p james


adriana.each{|key, value| p "#{key}, #{value}" } #can put in anything for |key, value| key and value are just place holders
 

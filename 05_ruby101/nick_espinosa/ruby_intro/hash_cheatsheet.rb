p adriana = {name: "adriana", :age => 23}
p james = Hash.new

james[:age] = 100000
p james
james[:name] = "james"
p james

p adriana[:name]
james[:name] = "chewy"
p james

p adriana.keys
p adriana.values
james.delete(:name)
p james

adriana.each{|key, value| p "#{key}, #{value}"}

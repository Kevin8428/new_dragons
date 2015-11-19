p adriana = {
  name: "adriana",
  :age => 23
}
p james = Hash.new
james[:age] = 100000
p james
james[:name] = "James"
p james

james[:name] = "Chewy"
p james

# keys returns key value and values returns what was assigned to the key
p adriana.keys
p adriana.values

james.delete(:name)
p james

adriana.each{|k, v| p "#{k}, #{v}"}

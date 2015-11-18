p adriana = {name: "Adriana", :age => 23, balls: false}
p james = Hash.new

james[:age] = 100
james[:name] = "James"
p james
p james.has_key? "James"
p james.has_key? :name

p adriana.values
james.delete(:name)
p james

adriana.each{|key,value,other| p "#{key}, #{value}, #{other}"}

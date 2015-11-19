def add_two(num, num2)
  p num + num2
end

add_two(3, 5)

p adriana = {name: "adriana", :age => 23}
p james = Hash.new
james[:age] = 1000
james[:name] = "James"
p james

james.delete(:name)
p james

adriana.each{|k, v| p "#{k}, #{v}"}

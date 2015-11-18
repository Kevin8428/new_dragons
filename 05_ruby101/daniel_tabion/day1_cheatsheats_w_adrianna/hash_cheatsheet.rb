daniel = {}
fred = Hash.new



daniel = { name: "daniel", :age=> 23 }
james = Hash.new
p daniel
p clone = daniel.new

james[:age] = 100000
james[:name] = "yoyoyo"
p james

p daniel.keys
p daniel.values

james.delete(:name)
p james

daniel.each{|k, v| p "#{k}, #{v}"}  #string interpolation with double quotes
daniel.each{|k, v| p '#{k}, #{v}'}  #string interpolation won't work!!

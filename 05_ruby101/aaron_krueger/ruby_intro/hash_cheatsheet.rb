#aaron = {}
#notAaron = Hash.new

aaron = {name:"Aaron", :age=>23}



addStuff ={}

addStuff[:firstThing]= 'the first thing'
addStuff[:secondThing]= 'the second thing'

# p addStuff
# p addStuff.values

addStuff.each{|key, value| p "#{key}, #{value}"}

# create a new hash
sam = {name:"Sam",:age => 27}
# or
#sam = Hash.new
# sam[:hair] = "long"
# p sam
# p sam[:name] = "Samuel"
# p sam[:hair]

# p sam.keys
# p sam.values
# sam.delete(:name)
p sam
sam.each{|key,value| p "#{key},#{value}"}

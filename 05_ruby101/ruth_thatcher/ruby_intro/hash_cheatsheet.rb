p adriana = {
  name: 'adriana',
  :age => 23
}
p james = Hash.new

james[:age] = 10000000
p james
p james[:name]='james'
p james

p adriana[:name] #symbols start with colon

jame[:name] = 'chewy'
p james

p adriana.values
james.delete(:name)
p james
#p clone = adriana.new

adriana.each{|key, value| p '#{k}, #{v}'} # key and value are placeholders
#quotes must be single!

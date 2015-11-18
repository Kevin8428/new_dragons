andrew = {
  name: 'Andy D',
  :age => 35
}
andy = Hash.new # empty hash
p andrew
andy[:stuff] = 'some stuff';
p andy

# keys are symbols, start with a :
andrew.keys # return array of keys
andrew.values # return array of values

# andrew.delete(:name); # remove key-value pair
andrew.each { |key, value| p "#{key}: #{value}" }

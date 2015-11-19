# p adriana = {  # declare hash
#    name: "adriana",
#    :age => 23  #another way to declar new key value pair
# }
#
# p james = Hash.new
# james[:age] = 1000
# james[:name] = "James" # key name so [ ]
# james[:name] = "Chewy"
# p james
# james.delete(:name) #delete is method so ( )
# p james


# Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string.
# words = ["hello", "what", "is", "up", "dude"]
# lengths(words)  # => [5, 4, 2, 2, 4]
#

##### !!!!! $variable = global variable !!!

stringArray = ['cube', 'sphere', 'box']

def lengths (array)
   string_lengths= []
# go thru array with
# get length of each item in array
# map to new array

   array.each {|x| string_lengths << x.length}
p string_lengths

end

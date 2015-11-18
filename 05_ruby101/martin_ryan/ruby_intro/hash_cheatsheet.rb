adriana = {
  name:"adriana",
  :age => 23 # can use either this or above syntax
}

# adriana = Hash.new # can also be used to create an empty hash

adriana[:sex] = "female"

# adriana.keys
# adriana.values
# adriana.delete(:names)
p adriana.each{|key, value| p "#{key},#{value}"}

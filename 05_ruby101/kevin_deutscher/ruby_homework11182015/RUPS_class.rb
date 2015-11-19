words = ["hello", "what", "is", "up", "dude"]

class Rups


  def lengths(array)
    p array.map{|word| word.length}
  end

end #---------------END CLASS

Rups_one = Rups.new
# Rups_one.lengths(['a','b','c'])
Rups_one.lengths(words)

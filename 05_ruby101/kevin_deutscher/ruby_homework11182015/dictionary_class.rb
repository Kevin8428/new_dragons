require 'json'
class Dictionary


  def initialize(int_hash)
    @internal_hash = int_hash
  end

  def add(key, value)
    @key = key
    @value = value
    p @internal_hash.to_json
  end

  

  def get_dictionary
    return @internal_hash
  end

end

p dictionary_one = Dictionary.new('test string')
# p Dictionary_one.get_dictionary

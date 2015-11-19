class Dictionary


  def initialize(int_hash)
    @internal_hash = int_hash
  end

  def add(key, value)
    @key = key
    @value = value
    p return @internal_hash
  end


  def get_dictionary
    return @internal_hash
  end

end

Dictionary_one = Dictionary.new('test string')
# p Dictionary_one.get_dictionary

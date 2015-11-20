class Dictionary

  def initialize(initial_hash)
    @internal_hash = initial_hash
  end

  def to_json
    return @internal_hash.to_json
  end

  def add(key, value)
    if key.is_a?(String) && value.is_a?(String)
      @internal_hash[key] = value
    end
    return @internal_hash
  end

  def to_hash
    return @internal_hash
  end

end


# 
# starting_hash = {
#   :happy => 'test text'
# }
#
#
# happy_things = Dictionary.new(starting_hash)
# json = happy_things.to_json
#
# fun_things = Dictionary.new({
#   :woot => 'new test string'
#   })

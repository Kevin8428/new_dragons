class Dictionary

  def initialize(initial_hash)
    @internal_hash = initial_hash
  end

end



starting_hash = {
  :happy => 'test text'
}


happy_things = Dictionary.new(starting_hash)

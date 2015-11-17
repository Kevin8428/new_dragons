paub = Hash.new

paub[:name] = 'Paub'
paub[:age] = 54

class Cow
  def initialize(name)
    @cow_name = name
  end
  def name
    @cow_name
  end
end

franklin = Cow.new("franklin")
p franklin
p franklin.name

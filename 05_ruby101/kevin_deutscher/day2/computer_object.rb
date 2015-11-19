computer = Object.new

#brand, name, model and operatin system

def computer.set_brand(brand_name)
  @brand = brand_name
  return @brand
end

def computer.get_brand
  return @brand
end

computer.set_brand('macbook')

#----
def computer.set_computer_name(computer_name)
  @name = computer_name
  return @name
end

def computer.get_computer_name
  return @name
end

#----
def computer.set_model(model_name)
  @model = model_name
  return @model
end

def computer.get_model
  return @model
end

#----
def computer.set_op_soft(op_soft_name)
  @op_soft = op_soft_name
  return @op_soft
end

def computer.get_op_soft
  return @op_soft
end


p computer.get_brand






#

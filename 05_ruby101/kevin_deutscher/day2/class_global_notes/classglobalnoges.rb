class Student
  @@student_count = 0
  attr_accessor :name


  def initialize(name,age)
    @name = name
    @age = age
    @@student_count += 1
  end

  def self.student_count
    @@student_count
  end


  def get_count
     @@student_count
  end

end

student_one = Student.new("kevin",27)
#student_two = Student.new("david",26)
#p student_one
#p student_two
#p student_one.name
#p Student.student_count
#p student_one.get_count

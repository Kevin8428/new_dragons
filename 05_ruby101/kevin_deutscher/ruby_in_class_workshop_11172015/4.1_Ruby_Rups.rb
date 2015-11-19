# testArray = [1,2,3,4,5,6]
# def test_method(anything)
#   for i in anything
#   p i if i >2
#   end
# end
#
# test_method(testArray)


# def prime?(number)
#    #if number == Math.sqrt(number).ceil
#    #p Math.sqrt(number)
#    #if number % 2 >0#tests if even or odd
#    if Math.sqrt(number) % 2 > 0
#     p "true"
#     #p "number is" number
#   else
#     p "false"
#   end
# end
#
# prime?(20)
# prime?(21)
# prime?(22)
# prime?(23)


#--------------------------




#teachers.sample(2)

# p starts.sample(1)

def town_names(i)
  starts = ["Bed", "Brunn", "Dun", "Far", "Glen", "Tarn"]
  middles = ["ding", "fing", "ly", "ston"]
  ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]

  if i==nil then i = 3
  end
    i.times{
    name1 = starts.sample(1)
    name2 = middles.sample(1)
    name3 = ends.sample(1)
    townArr = []
    townArr.push(name1, name2, name3)
    townName = townArr.each_slice(1).map{|a|a.join ''}.join ''
    p townName
    }
end

town_names(1)

# times do method

words = ['hello','what','is','up','dude']
# def lengths (arr)
#   len=[]
#   for word in arr
#     len.push(word.length)
#   end
#   p len
# end

# def lengths (arr)
#   return arr.map!{|word| word.length}
# end
#
# lengths(words)
#
# def trans(num1,num2,num3)
#   return (num1*num2)**num3
# end
#
# p trans(1,3,3)#8
#
# def toonify (accent,sentence)
#   if accent.downcase == 'daffy'
#     return  p sentence.gsub 's', 'th'
#   else
#     return p sentence.gsub 'r','w'
#   end
# end
# toonify("daffy", "so you smell like sausage")
#
# def letterReverse(str)
#   return str.split(' ').each{|word| word.reverse!}.join(' ')
# end
#
# p letterReverse("Put Hans back on the line")
#
# def wordReverse(str)
#   return str.split(' ').reverse.join(' ')
# end
#
# p wordReverse('now i know what tv dinner feels like')
#
# def longest (arr)
#   return arr.max{|a,b| a.length <=> b.length}
# end
#
# p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])


#######################################################################################################################
#######################################################################################################################
#######################################################################################################################
#######################################################################################################################
#######################################################################################################################


# def greaterThanTwo(arr)
#   arr.each do |thing|
#
#     end
#   end


def greaterThanTwo(arr)
  arr.each do |num|
    if num > 2
      p num
    else
      p 'not greater than two'
    end
  end
end

p greaterThanTwo([2,3,4,5])

p adriana = {name: 'adriana',
  :age =>23}
p james = Hash.new

paul = {:name=> 'Paul',
        :eyeColor => 'blue'}
p paul




#
#
# #
# # # # #
# # # # # words.each do |x|
# # # # #    p words[x].length
# # # # #  end
# # # #
# # # #
# # # #  num = 1
# # # #  while num < 11
# # # #    p num
# # # #    num+=1
# # # #  end
# # # #
# # # #
# # # num = 0
# # # until num > 10
# # #   p num
# # #   num +=1
# # # end
# # # num = 0
# # # for num in 0..5
# # #   p num
# # #   num +=1
# # # end
# #
# # # for num in 0..5
# # #   if num > 2
# # #     p 'greater than two'
# # #   end
# # #   p num
# # # end
# # # animals = ['cats','dogs','sup']
# # # for a in animals
# #   # p a
# # # # end
# #
# # teachers = ['jim','adriana','james']
# #  p teachers.length
# #  p teachers.count{|name| name == 'adriana'}

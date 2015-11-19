# def lengths(array)
#     p array.map {|element| element.length}
# end
# lengths(['happy','joy','test'])
#
# def transmogrified(num1, num2, num3)
#   p (num1 * num2) ** num3
# end
# transmogrified(5,3,2)
# transmogrified(13,12,5)
# transmogrified(42,13,7)
#
# def toonify(accent, sentence)
#   case accent
#     when 'daffy'
#     p sentence.gsub('s','th')
#     when 'elmer'
#     p sentence.gsub('r', 'w')
#   end
# end
# toonify('daffy','suckering suckatash')
# toonify('elmer', 'ropes are ravaging')
#
# def wordReverse(string)
#   blank = []
#   blank.push(string.split.reverse)
#   p blank.join(" ")
# end
# wordReverse("Now I know what a TV dinner feels like")
#
def letterReverse(string)
  blank = []
  blank2 = []
  blank.push(string.split("").reverse.join)
  p blank2
end

letterReverse("Put Hans back on the line")

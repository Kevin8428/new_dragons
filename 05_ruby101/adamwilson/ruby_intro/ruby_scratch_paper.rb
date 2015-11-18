
# Round 4
#
# Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.
# wordReverse("Now I know what a TV dinner feels like")
# # => "like feels dinner TV a what know I Now"

def wordReverse(string)
   array = string.split # [well, ruby, i, write]
   reverse_string = array.reverse.join(" ")
   p reverse_string
   return reverse_string
end

wordReverse('well ruby write I')

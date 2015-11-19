# # Reps for Ruby (performing JS reps in Ruby)


# // ROUND 1
#
# function lengths(arrayOfStrings) {
#   var output = [];
#   for (var indivString in arrayOfStrings) {
#     output[indivString] = arrayOfStrings[indivString].length;
#   }
#   return output;
# }

def lengths(arrayOfStrings)
  return arrayOfStrings.map{|word| word.length}
end

words = ["hello", "what", "is", "up", "dude"]
p lengths(words)  # => [5, 4, 2, 2, 4]






# // ROUND 2
#
# function transmogrifier(num1, num2, num3) {
#   return Math.pow((num1 * num2), num3);
# }

def transmogrifier(num1, num2, num3)

  return (num1 * num2) ** num3

end

p transmogrifier(5, 3, 2)
p transmogrifier(13, 12, 5)
p transmogrifier(42, 13, 7)








# // ROUND 3
#
# function toonify(accent, sentence) {
#   switch (accent) {
#     case "daffy":
#         return sentence.replace(/s/gi, "th");
#         break;
#     case "elmer":
#         return sentence.replace(/r/gi, "w");
#         break;
#     default:
#         return sentence;
#   }
# }

def toonify(accent, sentence)

  case accent
  when "daffy"
    return sentence.gsub(/[s]/,"th")
  when "elmer"
    return sentence.gsub(/[r]/,"www")
  else
    return sentence
  end

end

p toonify("daffy", "so you smell like sausage")






# // round 4
#
# function wordReverse(str) {
#   var arrStr = str.split(" ");
#   var revStr = arrStr.reverse();
#   return revStr.join(" ");
# }

def wordReverse(str)
  return str.split.reverse.join(" ")
end

p wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"






# // round 5
#
# function letterReverse(str) {
#   var output = "";
#   var arrStr = str.split(" ");
#   for (var i = 0; i < arrStr.length - 1; i++) {
#     output += arrStr[i].split("").reverse().join("") + " ";
#   }
#   output += arrStr[arrStr.length - 1].split("").reverse().join("");
#   return output;
# }

def letterReverse(str)

  return str.split.map{|word| word.reverse}.join(" ")

end

p letterReverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
p letterReverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"



# Round 6

# function longest(arrStr) {
#   var output = "";
#   for (var word in arrStr) {
#     if (arrStr[word].length > output.length) {
#       output = arrStr[word];
#     }
#   }
#   return output;
# }

def longest(arrStr)
  output = ""
  arrStr.map{|word| output = word if (word.length == arrStr.map{|word| word.length}.max)}
  return output

end
# this is a silly way to do it! ... but interesting

p longest(["oh", "good", "grief"]) # => "grief"
p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"

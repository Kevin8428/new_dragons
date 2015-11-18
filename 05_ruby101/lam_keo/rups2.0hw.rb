#1
lengths = ["hello", "what", "is", "up", "dude"]
  for words in lengths
    p words.length
  end

#2
def transmogrifier(num1, num2, power)
  product = (num1*num2)
  power = (product**power)
  puts power
end


#3
def toonify("accent", "sentence")
# function toonify(accent, sentence)
  if accent === "daffy"
    p sentence.gsub! (/[s]/,“th”)
 elsif accent === "elmer"
    p sentence.gsub! (/[r]/, "w")
 else
    p sentence
end


#4
wordreverse = "Now I know what a TV dinner feels like"
  puts wordreverse.reverse
wordreverse


#5
letterreverse ="Now I know what a TV dinner feels like"
  puts .reverse
letterreverse


#6
longest = ["oh", "good", "grief"]
 for words in longest
   p words.length
  if words.length == tie
    p

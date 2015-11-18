#ROUND 1

def lengths(array)
  p array.map{|word| word.length}
end

lengths(["hello","what","is","up","dude"])

#ROUND 2
def transmogrifier(a,b,c)
  p (a*b)**c
end

transmogrifier(5,4,3)
transmogrifier(13,12,5)
transmogrifier(42,13,7)

#ROUND 3
def toonify(accent, sentence)
  if accent == "daffy"
    p sentence.gsub(/[s]/, "th")
  elsif accent == "elmer"
    p sentence.gsub(/[r]/, "w")
  end
end

toonify("daffy", "so you smell like sausage")
toonify("elmer", "ruby ruby ruby")

#ROUND 4
def word_reverse(sentence)
  puts sentence.split(" ").reverse
end

word_reverse("Now I know what a TV dinner feels like")

#ROUND 5
def letter_reverse(array)
  input = array.split(" ")
  puts input.map{|word| word.reverse}
end

letter_reverse("Now I know what a TV dinner feels like")

#ROUND 6
def longest(array)
  length_of_words =  array.map{|word| word.length}
  p array.at(length_of_words.index(length_of_words.max))
end

longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

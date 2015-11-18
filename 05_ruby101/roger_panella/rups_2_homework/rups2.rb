# Round 1
words = ["hello","what","is","up","dude"]

def lengths(array)
  lengths = []
  array.each {|word|lengths.push(word.length)}
  p lengths
end

lengths(words)


# Round 2
def transmogrifier(a,b,c)
  p (a * b)**c
end

transmogrifier(5,3,2)

# Round 3
def toonify(accent,sentence)
    if accent == 'daffy'
      p sentence.gsub("s","th")
    elsif accent == 'elmer'
      p sentence.gsub("r","w")
    else p sentence
  end
end

toonify("daffy","shut up sucker")

# Round 4
sentenceToReverse = "Now I know what a TV dinner feels like"

def wordReverse(sentence)
  sentenceString = sentence.split(" ")
  reversedSentenceArray = sentenceString.reverse
  reversedSentenceString = reversedSentenceArray.join(" ")
  p reversedSentenceString
end

wordReverse(sentenceToReverse)

# Round 5

reverseTheLetters = "Oh man Im about to get reversed"
def letterReverse(sentence)
  reversedWordArray = []
  sentenceInArray = sentence.split(" ")
  sentenceInArray.each {|word|reversedWordArray.push(word.reverse)}
  allWordsReversed = reversedWordArray.join(" ")
  p allWordsReversed
end

letterReverse(reverseTheLetters)

# Round 6
bunchOfWords = ["desk","jacket","charger","mouse"]


def longest(array)
  biggestNumber = 0
  bigWords = []
  array.each do |word|
    if word.length > biggestNumber
      biggestNumber = word.length
      bigWords.push(word)
    end
  end
      p bigWords.last
end

longest(bunchOfWords)

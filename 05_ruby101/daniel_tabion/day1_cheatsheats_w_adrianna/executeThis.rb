#ROUND 5
def letterReverse(theString)
  theWords = theString.split(' ')
  # p theWords
  theWords.each {|word| word.reverse!}
  return theWords.join(' ')
end

p letterReverse("Now I know what a TV dinner feels like")

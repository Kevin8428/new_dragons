#ROUND 4
def wordReverse(theString)
  newWords = []
  theWords = theString.split(' ')
  # p theWords
  theWords.each {|word| newWords.unshift(word)}
  return newWords.join(' ')
end

p wordReverse("Now I know what a TV dinner feels like")

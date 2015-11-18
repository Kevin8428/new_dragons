# Round 1: String Lengths

def stringLengths (arrayOfStrings)
  i = 0
  secondArray = []
  while i < arrayOfStrings.length
    secondArray.push(arrayOfStrings[i].length)
    i += 1
  end
  return secondArray
end

p words = ["hello", "what", "is", "up", "dude"]
p stringLengths(words)

# Round 2: Transmogrifier

def transmogrifier (num1, num2, num3)
  firstNum = num1.to_i
  secondNum = num2.to_i
  thirdNum = num3.to_i

  result = (firstNum * secondNum) ** thirdNum
  return result
end

p transmogrifier(gets, gets, gets)

# Round 3: Toonify

def toonify (sentence, accent)
  if accent == 'daffy'
    sentence.gsub! 's', 'th'
    return sentence
  elsif accent == 'elmer'
    sentence.gsub! 'r', 'w'
    return sentence
  else
    return sentence
  end
end

p toonify('Mike Tyson, speech therapist, at your service.', 'daffy')
p toonify('Frosted Flakes: Theyre not just good, theyre grrreat!', 'elmer')

# Round 4: Word Reverse

def wordReverse (string)
  return string.reverse
end

p wordReverse('oknow')

# Round 5: Letter Reverse in Sentence

def sentenceReverse (string)
  someArray = string.split(' ')
  sentenceResult = ''
  i = 0
  while i < someArray.length
    sentenceResult = sentenceResult + someArray[i].reverse + ' '
    i += 1
  end
  return sentenceResult
end

p sentenceReverse("Now I know what a TV dinner feels like")

# Round 6: Longest String

def longest (yetAnotherArray)
  lengthiest = ''
  i = 0
  while i < yetAnotherArray.length
    if yetAnotherArray[i].length >= lengthiest.length
      lengthiest = yetAnotherArray[i]
    end
    i += 1
  end
  return lengthiest
end

p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
p longest(['john', 'jacob', 'jingle', 'heimerschmidt'])

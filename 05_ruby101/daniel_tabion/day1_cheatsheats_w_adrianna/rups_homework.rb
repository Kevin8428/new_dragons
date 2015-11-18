#ROUND 1


def length(theStrings)
  theLengths = []
  theStrings.each {|currentString| theLengths.push(currentString.length) }
  return theLengths
end

arrayOfStrings = ["One", "Two", "Three", "Four"]
p length(arrayOfStrings)


#ROUND 2
def transmogrifier(num1, num2, num3)
  return (num1 * num2) ** num3
end

p transmogrifier(1,2,3)
p transmogrifier(2,4,2)
p transmogrifier(2,4,3)


#ROUND 3
def toonify(accent, sentence)
  if accent == "daffy"
    sentence = sentence.gsub("S", "Th")
    return sentence.gsub("s", "th")
  elsif accent =="elmer"
    sentence = sentence.gsub("R", "W")
    return sentence.gsub("r", "w")
  else
    p "oops. I don't know that accent";
  end
end

p toonify("daffy", "I thought I saw a pussy cat")
p toonify("elmer", "Really, I just don\'t eat raw fish")

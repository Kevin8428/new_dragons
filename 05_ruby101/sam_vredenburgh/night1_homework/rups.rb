# Round 1
def lengths(array)
  new_array = []
  for string in array
    new_array.push(string.length)
  end
  return new_array
end

# Round 2
def transmogrifier(x,y,z)
  a = x * y
  return a**z
end

# Round 3
def toonify(accent,sentence)
if accent == "daffy"
  return sentence.gsub!("s","th")
elsif accent == "elmer"
  return sentence.gsub!("r","w")
else
  return sentence
end
end

# Round 4
def wordReverse(string)
 return string.split(" ").reverse.join(" ")
end

# Round 5
def letterReverse(string)
return string.split("").reverse.join("").split(" ").reverse.join(" ")
end

# Round 6
def longest(stringArray)
  greatest = 0
  long = ""
for word in stringArray
  if word.length > greatest
    greatest = word.length
    long = word
  end
  end
  return long
end

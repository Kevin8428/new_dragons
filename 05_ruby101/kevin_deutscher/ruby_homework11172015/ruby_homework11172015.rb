#quiz answers 11182015
#..?
#float and fixed note
#a Hash
#=>
#methods because everytihng is an object

#ROUND1---------------------------------------------------

def lengths(inputArray)
  newArr = []
  #could do p array.map{|word|word.length}
  newArr.push(inputArray.map{|words| words.length})
  p newArr
end

#.map makes a temporary array transformed by parameters

words = ["hello", "what", "is", "up", "dude"]
lengths(words)


#ROUND2---------------------------------------------------


def transmogrifier(a,b,c)
  p (a*b)**c
end
transmogrifier(5,3,2)

#ROUND3---------------------------------------------------


def toonify(accent,sentence)
  if accent == "daffy"
    p sentence.gsub! 's','th'
  elsif accent == "elmer"
    p sentence.gsub! 'r','w'
  end
end

toonify("daffy", "so you smell like sausage")
toonify("elmer", "here is a rough sentence")

#ROUND4---------------------------------------------------


def wordReverse(inputArr)
  p inputArr.split.each_slice(1).map{|a|a.join ' '}.reverse.join ' '
end

wordReverse("Now I know what a TV dinner feels like")

#ROUND5----------------------------------------------------

def letterReverse(inputArr)
  #could do string.split.map{|words|.word.length}
  p inputArr.reverse.split.each_slice(1).map{|a|a.join ' '}.reverse.join ' '
end

letterReverse("Now I know what a TV dinner feels like")
letterReverse("Put Hans back on the line")


#ROUND6----------------------------------------------------

def longest(input)
  max = ""
  input.each{|thing|
    if thing.length>max.length
      max = thing
    end
    }
  p max
end

longest(["this", "is", "an", "extremely", "normal", "string"])







#

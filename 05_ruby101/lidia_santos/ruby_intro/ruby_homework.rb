
// Round 1
powerrangers = ['Billy', 'Jason', 'Kimberly', 'Zack', 'Trini']


def lengths(rangersArray)
  rangersLengths = []
  rangersArray.each {|ranger|rangersLengths.push(ranger.length)}
  p rangersLengths
end

lengths(powerrangers)








/// Round 2
def transmogrifier(num1, num2, num3)
  p (num1 * num2)**num3
 end

transmogrifier(5,3,2)

# // Round 3 -


def toonify(accent, sentence)
  if accent == 'daffy'
      p sentence.gsub("s", "th")
    elsif accent == 'elmer'
        p sentence.gsub("r", "w")
      else p sentence
  end
end
toonify('daffy', 'show me the shortest route to the really big refrigerator store ')



// round 4

def word_Reverse(words)
  word_string = words.split(" ")
  reversify = word_string.reverse
  reverse_reverse = reversify.join(' ')
  p reverse_reverse
end
word_Reverse("Now this is a story all about how my life got flipped turned upside down")



// round 5

function backwords(x) {
  var a = [];
  for (var i = x.length - 1; i >= 0; i --) {
    a.push(x[i]);
  }
  var b = a.join('');
  return b;
}

function letterReverse(c) {
  var y = [];
  var z = c.split(' ');
  for (var i = 0; i < z.length; i++) {
    y.push(backwords(z[i]));
  }
  var d = y.join(' ');
  return d;
}

letterReverse('did this really work')

//Round 6


spiceGirls = ['Emma', 'Victoria', 'Melanie C', 'Mel B', 'Geri']

def longest(spice)
biggestNumber = 0
longestString = []
spice.each do |girl|
    if girl.length > biggestNumber
      biggestNumber = spice.length
      longestString.push(girl)
    end
  end
    p longestString.last
end

longest(spiceGirls)

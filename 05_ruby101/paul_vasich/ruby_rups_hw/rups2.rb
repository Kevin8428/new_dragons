Testing = false
                                # lengths
def lengths ls
  ls.map {|item|
  p item.to_s.length
} end

def transmogrifier a, b, c
  p (a * b) ** c
end

                                # toonify
def toonify accent, sentence
  if accent == 'daffy'
    p sentence.gsub(/[sS]/, 'th')
  elsif accent == 'elmer'
    p sentence.gsub(/[rR]/, 'w')
  else
    p sentence
  end
end

                                # word_reverse
def word_reverse ls
  p ls.reverse
end

                                # letter_reverse
def letter_reverse string
  p string.reverse
end

                                # longest
def longest ls
  p ls.max {|i, j| i.length <=> j.length }
end

                                # testing
if Testing
  v = ['how', 'does', :this, 456]
  lengths v
  transmogrifier 2, 3, 4
  toonify 'daffy', 'smelly sour salmon'
  toonify 'elmer', 'hear me roar'
  word_reverse ['how', 'now', 'brown', 'cow']
  letter_reverse "hello there goober"
  longest ['one', 'two', 'three', 'shmowzow', 'six', 'seven']
end

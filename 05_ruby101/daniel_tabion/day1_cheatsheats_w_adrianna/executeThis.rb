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

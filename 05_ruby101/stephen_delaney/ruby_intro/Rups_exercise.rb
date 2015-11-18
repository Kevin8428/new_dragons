# Round 1: Prime Time

# def prime?(number)
# Math.sqrt(number)
# if number....
# end
#
# prime?(13)


#Make sure to follow in class on this one

# Round 2: Fardingworth Falls

# Starts = ['Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn']
# Middles = ['ding', 'fing', 'ly', 'ston']
# Ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']
# Water = ['-on-sea', ' Falls']
#
#
# # STEP 1
# # def town_names(num = 3)
# #   num.times do
# #     p Starts.sample + Middles.sample + Ends.sample
# # end
# # end
# #
# # town_names(5)
#
# # STEPS 2 & 3
#
#
def town_names(num = 3, place = nil)
if place == 'near_water'
  num.times do
  p Starts.sample + Middles.sample + Ends.sample + Water.sample
end
elsif place == 'short_name'
  num.times do
    p Starts.sample + Ends.sample
end
else
  num.times do
    p Starts.sample + Middles.sample + Ends.sample
end
end
end

# town_names
# town_names(3, 'near_water')
town_names(5, 'short_name')

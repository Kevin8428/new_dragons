# def prime?(number)
#   if Math.sqrt(number) !=
#     p "true"
#   else
#     p "false"
#   end
#
# prime?(17)

Starts = ["Bed", "Brunn", "Dun", "Far", "Glen", "Tarn"]
Middles = ["ding", "fing", "ly", "ston"]
Ends = ["borough", "burg", "ditch", "hall", "pool", "ville", "way", "worth"]
def town_names(x)
   p Starts.sample(x) + Middles.sample(x) + Ends.sample(x)
 end

town_names(3)

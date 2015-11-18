# Round 1: Prime Time
#
# def prime(number)
#   (2..Math.sqrt(number)).each do |counter|
#     if (number % counter == 0)
#       return p false
#       end
#     end
#     p true
#     end
# prime(2)
#
# Round 2: Fardingworth Falls
#
# def town_names(number, selector)
#     blank = []
#     random = ['-on-sea', ' Falls']
#     starts = ['Bed', 'Brunn', 'Dunn', 'Far', 'Glen', 'Tarn']
#     middles = ['ding', 'fing', 'ly', 'ston']
#     ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']
#
# case selector
#     when 'near_water'
#         (0..number).each do |i|
#         blank.push(starts.sample + ' ' + middles.sample + ' ' + ends.sample + random.sample)
#         end
#         p blank
#     when 'short_name'
#         (0..number).each do |i|
#         blank.push(starts.sample + ' ' + ends.sample)
#         end
#         p blank
#
#     else
#         (0..number).each do |i|
#         blank.push(starts.sample + ' ' + middles.sample + ' ' + ends.sample)
#         end
#         p blank
# end
#
# end
# town_names(5, '')

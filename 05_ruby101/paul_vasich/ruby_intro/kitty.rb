kitty_toys =
  [:shape => 'sock', :fabric => 'cashmere'] +
  [:shape => 'mouse', :fabric => 'calico'] +
  [:shape => 'eggroll', :fabric => 'chenille']

kitty_toys.sort_by { |toy| toy[:fabric] }.each do |toy|
  puts "George has a #{ toy[:shape] } made of #{ toy[:fabric] }"
end

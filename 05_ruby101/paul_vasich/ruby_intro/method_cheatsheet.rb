math_frame = lambda do |fn, a, b|
  a.send(fn, b)
end

add = math_frame.curry.(:+)
subtract = math_frame.curry.(:-)
p add.(1, 2)
p subtract.(5, 4)

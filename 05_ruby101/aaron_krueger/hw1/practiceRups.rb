def prime? (num)
  (2..Math.sqrt(num)).each {|i|
    if num % i == 0 && i < num
      return false
    end
    }
    return true
end

p prime?(7)

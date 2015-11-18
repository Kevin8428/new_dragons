file = ARGV.first

puts "The file is #{file}"

open_file = open(file)
contents = open_file.read

print "Blah #{contents}"
print "Line #{open_file.seek(0)}"

open_file.close

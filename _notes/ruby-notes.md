---
layout: page
title: Ruby Notes
displayIndex: false
---

## String
string interpolation: #{var}

## Methods
Methods ending with:
* ? - predicates, return truthy
* ! - mutates the variable

## Classes
- classes are blueprints or factories for objects
- objects have unique *state* and shared *behavior*
- initialize method is required for classes, assigning instance variables
- instance variables start with "@"
- to_s should be included in classes and return a instance variables as strings
- getters and setters can be set with attributes
- attr_reader :foo - getter/readable
- attr_writer :foo - setter/writable
- attr_accessor :foo - both readable and writable
- we refer to the external state of an object as its attributes

```ruby
# overide attr_accessor and attr_writer 
# with "varName=(foo)"

ex. def name=(new_name)
  @name = new_name.capitalize
end
```

## Arrays
- [], Array.new
- arrays are objects that can hold any data type, you can call methods on
- accessing an item not found in the array will return nil
- seats = %w(kermit fozzie gonzo) shortcut for creating an array of words
- Array.size return length
- pop, push
- puts arrayName will call to_s on each array item
- Array.each
```ruby
Array.each do |foo|
    puts foo.name
end
```

## Objects Interacting
```ruby
playlist1 = Playlist.new("Kermit")
playlist1.add_movie(movie1)
playlist1.add_movie(movie2)
playlist1.add_movie(movie3)

playlist1.play

class Playlist
	# state
	def initialize(name)
 		@name = name
 		@movies = []
	end

	# behavior
	def add_movie(movie)
		@movie << movie
	end

	def play
		puts "#{name}'s playlist:"
		puts @movies

		@movies.each do |movie|
			movie.thumbs_up
			puts movie
		end
	end
end

```
## Separate Source Files
- modularize classes into their own file, named class_name.rb
- import classes with: require_relative 'class_name' at top of file
- example code at after class def.

```ruby
# if class.rb is the currently running file
# code below will not run when class is imported from other files
if __FILE__ == $0
 # run code here
end

## Unit Testing
- RSpec

## Conditionals and TDD (Test Driven Development)
```ruby
if foo > 10
	puts "Hit"
end

puts "Hit" if movie.rank >= 10
```

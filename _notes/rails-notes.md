---
layout: page
title: Rails Notes
displayIndex: false
---

## Generated Directories

### app

- bulk of application code here

#### assets
- images, JS, stylesheets

#### models, views, controllers
- model, view, controller locations

#### helpers
- Ruby modules that define utility methods for *views*

#### mailers
- Ruby classes for generating and sending emails

#### jobs
- Ruby classes for background jobs

#### channels
- Ruby classes for handling realtime features using *Action Cable*

### bin
- the rails script file

### config
- tweak configuration settings

#### database.yml
- configures the db used by each environment

#### routes.rb
- maps incoming requests (URLs) to application code

#### environments
- directory that contains 3 files that define specific settings for each environment: development, test, and production

#### initializers
- is a directory where you put Ruby code that needs to be run when the application starts

### db
- contains everything related to database, including migration files and the sqlite3 database file itself

### lib
- reusable "library" code that's not a model, view, or controller

#### tasks
- custom rake tasks, .rake files

### log 
- Rails automatically creates log files
- each environment has its own log file

### public
- the doc rootof the app
- contains static files, 404.html

### test 
- where you put test files if you use the default test library
- (using RSpec library in class)

### tmp
- Rails stores temporary files needed by the app

### vendor
- third-party code (old days)
- nowadays we use gems declared in the Gemfile

### Gemfile
- third-party dependencies (Ruby gems) that the app needs

## ERB

```ruby
# substitutes result into template
<%=  %>

# does not substitute results into template
<%  %>

# example

<ul>
  <% @event.each do |event| %>
  	<li><%= event %></li>
  <% end %>	
</ul>
```

## Steps to Correctly Route a URL

1. pick a URL or route, e.g. "index.html"
2. define a route in routes.rb
	* # verb | url | controller#action
	* get "index" => "index#foo"
3. create a controller
	* in terminal app root: "rails generate controller index"
4. in newly created index_controller.rb in /controllers, create a "foo" action
	* leave function body empty, Rails will find views/index/foo.html.erb
5. create file app/views/index/foo.html.erb

## Models (Generating Them)

### Supported Database Column Types
- string
- text
- integer
- decimal
- float
- boolean
- binary
- date
- time
- datetime
- primary_key
- timestamp

### Steps in Exercise Using Rails Conventions
- generate a model and migration
- run a migration
- create database records three different ways
- fetch records from the database
- update records in the database
- delete records from the database

## Connecting MVC

- The *controller* acts as a middleman. With one hand, it asks the model for application data (movies in this case) and assigns the data to instance variables. With the other hand it tells a view template to display the data in a view. Notice that the controller doesn't tell the model or view how to do their jobs.

- The *model* provides convenient access to application-level data. In this case, our Movie model is connected to a database table that contains movie information. The model completely encapsulates the lower-level details of how each row of the database table is translated into a usable object. The model isn't concerned with how the data will be used. Models can also define business logic (behavior) which we'll look at a bit later.

- The *view* is simply the presentation of data in an arbitrary format. In this case we used a view template to generate an HTML view. The view doesn't concern itself with how the data it's displaying was assembled. 


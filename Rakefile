require 'rubygems'
require 'bundler/setup'

task :default => :build

desc "Compiles the Javascripts using sprockets"
task :build do
  `mkdir -p build`
  `bundle exec sprocketize -I lib -I src src/*.js > build/gesticulate.js`
end

desc "Starts a server to run the tests"
task :server do
  require 'lib/server/server'
  ServerApp.run! :port => 9900, :logging => true
end

desc "Opens the browser with the spec's url"
task :open do
  require 'launchy'
  Launchy.open("http://localhost:9900/")
end
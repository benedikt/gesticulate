require 'rubygems'
require 'bundler/setup'

Bundler.require(:default)

task :default => :build

desc 'Compiles the Javascripts using sprockets'
task :build => :clean do
  `mkdir -p build`
  `bundle exec sprocketize -I lib -I src src/*.js > build/gesticulate.js`
end

desc 'Starts a server to run the tests'
task :server do
  require 'lib/server/server'
  ServerApp.run! :port => 9900, :logging => true
end

desc 'Opens the browser with the spec\'s url'
task :open do
  require 'launchy'
  Launchy.open('http://localhost:9900/')
end

desc 'Generate the documentation'
task :doc => :build do
  PDoc.run({
    :source_files => Dir[File.join(File.dirname(__FILE__), 'build', 'gesticulate.js')],
    :destination => File.join(File.dirname(__FILE__), 'doc'),
    :syntax_highlighter => :pygments,
    :markdown_parser => :bluecloth,
    :pretty_urls => true,
    :bust_cache => true,
    :name => 'Gesticulate',
    :home_url => 'https://benedikt.github.com/gesticulate',
    :doc_url => 'https://benedikt.github.com/gesticulate/doc',
    :version => '0.0.1'
  })
end

desc 'Cleanup everything'
task :clean do
  `rm -rf doc/* build/*`
end
require 'rubygems'
require 'bundler/setup'

Bundler.require(:default)

task :default => :build

desc 'Compiles the Javascripts using sprockets'
task :build do
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
task :doc do
  PDoc.run({
    :source_files => Dir[File.join(File.dirname(__FILE__), 'src', '**', '*.js')],
    :index_page   => 'README.markdown',
    :destination => File.join(File.dirname(__FILE__), 'doc'),
    :syntax_highlighter => :pygments,
    :markdown_parser => :bluecloth,
    :pretty_urls => false,
    :bust_cache => true,
    :name => 'Gesticulate',
    :home_url => 'https://benedikt.github.com/gesticulate',
    :doc_url => 'https://benedikt.github.com/gesticulate/doc',
    :version => '0.0.1'
  })
end

desc 'Cleanup documentation'
task :clean_doc do
  `rm -rf doc/* build/*`
end

desc 'Cleanup build'
task :clean_build do
  `rm -rf build/*`
end

desc 'Cleanup documentation'
task :clean => [:clean_doc, :clean_build] do
  `rm -rf doc/* build/*`
end
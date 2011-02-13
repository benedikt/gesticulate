require 'sinatra'
require 'sprockets'
require 'pathname'

class ServerApp < Sinatra::Base

  set :root, File.join(File.dirname(__FILE__), '../..')
  set :public, 'src'

  get '/' do
    erb :index
  end
  
  get '/lib/*' do
    content_type params[:splat].first =~ /\.css$/ ? 'text/css' : 'text/javascript'
    File.read(File.join(settings.root, 'lib', params[:splat]))
  end
  
  get '/spec/*' do
    content_type 'text/javascript'
    File.read(File.join(settings.root, 'spec', params[:splat]))
  end
  
  get '/build/*' do
    content_type 'text/javascript'
    secretary = Sprockets::Secretary.new(
      :load_path    => [File.join(settings.root, 'lib')],
      :source_files => [File.join(settings.public, params[:splat])]
    )
    secretary.concatenation.to_s
  end

  get '/examples/?' do
    erb :examples
  end

  get '/examples/*' do
    File.read(File.join(settings.root, 'examples', params[:splat]))
  end

  get '/application.manifest' do
    content_type 'text/cache-manifest'

    manifest = "CACHE MANIFEST\n\n"
    manifest << "# " << Digest::SHA2.hexdigest(Time.now.to_s + Time.now.usec.to_s) << "\n"

    
    Pathname.glob(File.join(root, "**", "*")).each do |p|
      manifest << "/" << p.relative_path_from(root) << "\n" if p.file?
    end

    manifest
  end
  
  template :index do
    %Q(<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Jasmine Test Runner</title>
<link rel="stylesheet" type="text/css" href="lib/jasmine/jasmine.css">
<script type="text/javascript" src="lib/jasmine/jasmine.js"></script>
<script type="text/javascript" src="lib/jasmine/jasmine-html.js"></script>

<script type="text/javascript" src="lib/prototype/prototype.js"></script>

<script type="text/javascript" src="build/gesticulate.js"></script>

<% spec_files.each do |file| %>
<script type="text/javascript" src="<%= file %>"></script>
<% end %>

</head>
<body>
<script type="text/javascript">
jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
jasmine.getEnv().execute();
</script>

</body>
</html>)
  end

  template :examples do
    %Q(<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Gesticulate Examples</title>
<style type="text/css">
  a {
    float: left;
    background: #ccc;
    color: #000;
    padding: 10px;
    margin: 10px;
    font-family: sans-serif;
  }
</style>
</head>
<body>

<% example_files.each do |file| %>
  <a href="/<%= file %>"><%= file %></a>
<% end %>

</body>
</html>)
  end

  helpers do 
    def spec_files
      [].tap do |files|
        root = Pathname.new(settings.root)
        Pathname.glob(File.join(root, "spec", "**", "*.js")).each do |p|
          files << p.relative_path_from(root) if p.file?
        end
      end
    end

    def example_files
      [].tap do |files|
        root = Pathname.new(settings.root)
        Pathname.glob(File.join(root, "examples", "*.html")).each do |p|
          files << p.relative_path_from(root) if p.file?
        end
      end
    end
  end
end
watch('src/.*\.js') { run_specs }
watch('spec/.*\.js') { run_specs }


Signal.trap('QUIT') { run_specs }
Signal.trap('INT') { abort("\n") }

def run_specs
  puts "=== Reloading Safari at #{Time.now.to_s}\n"
  reload_safari!
end

def reload_safari!
  system %q{ps -xc | grep -sq Safari && osascript -e 'tell app "Safari"' \
            -e 'do JavaScript "window.location.reload();" in first document' \
            -e 'end tell' &> /dev/null}
end
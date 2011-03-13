# Gesticulate

Describe and recognize multitouch gestures in JavaScript. This is very experimental and currently only intended to figure out the possibilites. Comments are highly appreciated!

## Requirements

* An iTouch device

## Intended Usage

This is just a sketch to gather ideas. Don't expect anything to work like described here.

### Defining gestures

Simple one finger gesture:

    Gesticulate.buildGesture('swipe', function(gesture) {
      gesture.finger().moves({ from: 'left', to: 'right' });
    });

Simple two finger gesture:

    Gesticulate.buildGesture('twoFingerSwipe', function(gesture) {
      // There are no constraints yet.
      // It's possible to swipe one finger and then a second one.
      gesture.finger(0).moves({ from: 'left', to: 'right' });
      gesture.finger(1).moves({ from: 'left', to: 'right' });

      // Possible alternative:
      gesture.fingers([0, 1]).move({ from: 'left', to: 'right });
    });

### Observing gestures

    Gesticulate.observe(document.getElementById('canvas'), 'swipe');

### Explicitly firing gestures (for simulation purposes)

    // Set up a fake gesture. Doesn't really recognize anything.
    var gesture = new Gesticulate.Gesture('swipe');
    Gesticulate.fire(document.getElementById('canvas'), gesture);

### Explicitly driving the recognition process (for simulation purposes)

    var gesture = new Gesticulate.Gesture('swipe');
    gesture.finger().moves({ from: 'left', to: 'right' });

    gesture.update(new Gesticulate.TouchEvent('start', {
      changedTouches: [{ x: 0, y: 0 }]
    }));

    for(var i = 1; i < 200; i++) {
      gesture.update(new Gesticulate.TouchEvent('move', {
        changedTouches: [{ x: i, y: 0 }]
      }));
    }

    gesture.update(new Gesticulate.TouchEvent('end', {
      changedTouches: [{ x: 200, y: 0 }]
    }));

## Known issues

See the [issue tracker on GitHub](https://github.com/benedikt/gesticulate/issues)

## Repository

See the [repository on GitHub](https://github.com/benedikt/gesticulate) and feel free to fork it!

## Copyright

Copyright (c) 2010 Benedikt Deicke. See LICENSE for details.

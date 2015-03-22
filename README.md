<div align="center">
  <img src="./public/design/logo.png" height="120px" alt="Browsercast" title="Browsercast">
</div>  

Browsercast
===========

The Browsercast project aims to offer a web-based slideshow composition tool with support for voice-over synchronization.
The tool offers full playback functionality (play/stop/pause/resume) with perfect voice-over synchronization like a video, but maintains a rich web environment: searchable text, images, links, interactivity, and styling.

## Demo

[About Browsercast - Feature list](http://redenergy.github.io/Browsercast?demo=demo-about)
[Prezentation with voice-over syncronization](http://redenergy.github.io/Browsercast)  

## Development

Browsercast is a single page, client side HTML5 application. It works without an internet connection just by using local resources. That means, it can also be hosted and served statically from any server including github pages.

#### Prerequisites
- Node.js
- Gulp.js build system - used for compiling handlebars templates, optimize require.js and livereload server
  -- (optional) install gulp.js as a global dependency "npm install -g gulp"

#### How to

1. clone repo
2. type "npm install" - installs all development dependencies
3. type "gulp" - starts a server on localhost:8080 with livereload functionality
4. start hacking
